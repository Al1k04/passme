import { readFileSync } from "node:fs";
import { join } from "node:path";

import { PrismaClient } from "@prisma/client";

import { parserInventory } from "./parser";
import { getComparableTitle, normalizeTitle } from "./normalizeTitle";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DIRECT_URL,
});

async function main() {
  const filePath = join(process.cwd(), "inventory.txt");

  const text = readFileSync(filePath, "utf-8");

  const inventoryGames = parserInventory(text);

  if (inventoryGames.length < 50) {
    throw new Error(
      `Inventory выглядит подозрительно: найдено всего ${inventoryGames.length} игр.`,
    );
  }

  const dbGames = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  const aliases = await prisma.inventoryAlias.findMany({
    select: {
      normalizedTitle: true,
      gameId: true,
    },
  });

  const dbById = new Map(dbGames.map((game) => [game.id, game]));

  const dbByNormalized = new Map<string, (typeof dbGames)[number][]>();

  const dbByComparable = new Map<string, (typeof dbGames)[number][]>();

  for (const game of dbGames) {
    const normalized = normalizeTitle(game.title);
    const comparable = getComparableTitle(game.title);

    const normalizedExisting = dbByNormalized.get(normalized);

    if (normalizedExisting) {
      normalizedExisting.push(game);
    } else {
      dbByNormalized.set(normalized, [game]);
    }

    const comparableExisting = dbByComparable.get(comparable);

    if (comparableExisting) {
      comparableExisting.push(game);
    } else {
      dbByComparable.set(comparable, [game]);
    }
  }

  const aliasByNormalizedTitle = new Map(
    aliases.map((alias) => [alias.normalizedTitle, alias.gameId]),
  );

  const stockByGameId = new Map<
    number,
    {
      title: string;
      ps4Stock: number;
      ps5Stock: number;
    }
  >();

  const newAliases = new Map<
    string,
    {
      sourceTitle: string;
      gameId: number;
    }
  >();

  const unmatchedInventory: string[] = [];
  const ambiguousInventory: string[] = [];

  for (const inventoryGame of inventoryGames) {
    const sourceTitle = inventoryGame.gameTitle;

    const normalizedSource = normalizeTitle(sourceTitle);

    let dbGame: (typeof dbGames)[number] | undefined;

    const aliasGameId = aliasByNormalizedTitle.get(normalizedSource);

    if (aliasGameId !== undefined) {
      dbGame = dbById.get(aliasGameId);
    }

    if (!dbGame) {
      const exactMatches = dbByNormalized.get(normalizedSource) ?? [];

      if (exactMatches.length === 1) {
        dbGame = exactMatches[0];
      }

      if (exactMatches.length > 1) {
        ambiguousInventory.push(sourceTitle);
        continue;
      }
    }

    if (!dbGame) {
      const comparableSource = getComparableTitle(sourceTitle);

      const matches = dbByComparable.get(comparableSource) ?? [];

      if (matches.length === 1) {
        dbGame = matches[0];
      }

      if (matches.length > 1) {
        ambiguousInventory.push(sourceTitle);
        continue;
      }
    }

    if (!dbGame) {
      unmatchedInventory.push(sourceTitle);
      continue;
    }

    if (
      normalizedSource !== normalizeTitle(dbGame.title) &&
      !aliasByNormalizedTitle.has(normalizedSource)
    ) {
      newAliases.set(normalizedSource, {
        sourceTitle,
        gameId: dbGame.id,
      });

      console.log(`AUTO MATCH: "${sourceTitle}" -> "${dbGame.title}"`);
    }

    const existing = stockByGameId.get(dbGame.id);

    if (existing) {
      existing.ps4Stock += inventoryGame.ps4_stock;
      existing.ps5Stock += inventoryGame.ps5_stock;
    } else {
      stockByGameId.set(dbGame.id, {
        title: dbGame.title,
        ps4Stock: inventoryGame.ps4_stock,
        ps5Stock: inventoryGame.ps5_stock,
      });
    }
  }

  console.log("\n==============================");
  console.log("ИНФОРМАЦИЯ");
  console.log("==============================");

  console.log("Уникальных названий в TXT:", inventoryGames.length);

  console.log("Игр в Prisma:", dbGames.length);

  console.log("Готово к синхронизации:", stockByGameId.size);

  console.log("Новых aliases:", newAliases.size);

  console.log("Не найдено в Prisma:", unmatchedInventory.length);

  console.log("Неоднозначных:", ambiguousInventory.length);

  console.log("\n==============================");
  console.log("ЧТО БУДЕТ ОБНОВЛЕНО");
  console.log("==============================");

  for (const [gameId, stock] of stockByGameId) {
    console.log(
      `${gameId} | ${stock.title} | PS4: ${stock.ps4Stock} | PS5: ${stock.ps5Stock}`,
    );
  }

  console.log("\n==============================");
  console.log("ТОЛЬКО В TXT");
  console.log("==============================");

  console.log(unmatchedInventory);

  console.log("\n==============================");
  console.log("НЕОДНОЗНАЧНЫЕ");
  console.log("==============================");

  console.log(ambiguousInventory);

  if (process.env.SYNC_INVENTORY !== "true") {
    console.log("\n==============================");
    console.log("DRY RUN");
    console.log("==============================");

    console.log("База данных НЕ изменена.");

    return;
  }

  if (stockByGameId.size < 100) {
    throw new Error(
      `Слишком мало сопоставленных игр: ${stockByGameId.size}. Обновление отменено.`,
    );
  }

  console.log("\n==============================");
  console.log("НАЧИНАЕМ ОБНОВЛЕНИЕ");
  console.log("==============================");

  const operations = [];

  operations.push(
    prisma.game.updateMany({
      data: {
        ps4Stock: 0,
        ps5Stock: 0,
      },
    }),
  );

  for (const [gameId, stock] of stockByGameId) {
    operations.push(
      prisma.game.update({
        where: {
          id: gameId,
        },
        data: {
          ps4Stock: stock.ps4Stock,
          ps5Stock: stock.ps5Stock,
        },
      }),
    );
  }

  for (const alias of newAliases.values()) {
    operations.push(
      prisma.inventoryAlias.upsert({
        where: {
          normalizedTitle: normalizeTitle(alias.sourceTitle),
        },
        update: {
          sourceTitle: alias.sourceTitle,
          gameId: alias.gameId,
        },
        create: {
          sourceTitle: alias.sourceTitle,
          normalizedTitle: normalizeTitle(alias.sourceTitle),
          gameId: alias.gameId,
        },
      }),
    );
  }

  await prisma.$transaction(operations);

  console.log("\n==============================");
  console.log("ГОТОВО");
  console.log("==============================");

  console.log(`Обновлено игр: ${stockByGameId.size}`);

  console.log(`Добавлено aliases: ${newAliases.size}`);
}

main()
  .catch((error) => {
    console.error("\nОшибка синхронизации:");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
