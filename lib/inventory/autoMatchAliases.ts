import { PrismaClient } from "@prisma/client";

import { parserInventory } from "./parser";
import { normalizeTitle } from "./normalizeTitle";

import { readFileSync } from "node:fs";
import { join } from "node:path";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DIRECT_URL,
});

function simplifyTitle(title: string): string {
  return normalizeTitle(title)
    .replace(
      /\b(ultimate|deluxe|standard|standart|complete|premium|gold|definitive|digital|edition|bundle|collection|goty|game of the year|cross gen|cross-gen|anniversary|special|originals|resynced|version|издание|версия|коллекция|sürüm|paketi)\b/gi,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  const filePath = join(process.cwd(), "inventory.txt");

  const text = readFileSync(filePath, "utf-8");

  const inventoryGames = parserInventory(text);

  const dbGames = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  const existingAliases = await prisma.inventoryAlias.findMany({
    select: {
      normalizedTitle: true,
    },
  });

  const existingAliasTitles = new Set(
    existingAliases.map((alias) => alias.normalizedTitle),
  );

  const dbBySimplifiedTitle = new Map<string, (typeof dbGames)[number][]>();

  for (const game of dbGames) {
    const key = simplifyTitle(game.title);

    const existing = dbBySimplifiedTitle.get(key);

    if (existing) {
      existing.push(game);
    } else {
      dbBySimplifiedTitle.set(key, [game]);
    }
  }

  let added = 0;
  let review = 0;

  for (const inventoryGame of inventoryGames) {
    const sourceTitle = inventoryGame.gameTitle;
    const normalizedSource = normalizeTitle(sourceTitle);

    if (existingAliasTitles.has(normalizedSource)) {
      continue;
    }

    if (
      sourceTitle.includes("+") ||
      /\s&\s/i.test(sourceTitle) ||
      /\s(and|ve)\s/i.test(sourceTitle)
    ) {
      review++;
      continue;
    }

    const exactMatches = dbGames.filter(
      (game) => normalizeTitle(game.title) === normalizedSource,
    );

    if (exactMatches.length === 1) {
      continue;
    }

    const simplifiedKey = simplifyTitle(sourceTitle);

    if (!simplifiedKey) {
      review++;
      continue;
    }

    const matches = dbBySimplifiedTitle.get(simplifiedKey) ?? [];

    if (matches.length === 1) {
      const game = matches[0];

      await prisma.inventoryAlias.upsert({
        where: {
          normalizedTitle: normalizedSource,
        },
        update: {
          sourceTitle,
          gameId: game.id,
        },
        create: {
          sourceTitle,
          normalizedTitle: normalizedSource,
          gameId: game.id,
        },
      });

      existingAliasTitles.add(normalizedSource);

      added++;

      console.log(`AUTO: "${sourceTitle}" -> "${game.title}"`);

      continue;
    }

    review++;
  }

  console.log("\n==============================");
  console.log("ГОТОВО");
  console.log("==============================");

  console.log(`Добавлено aliases: ${added}`);
  console.log(`Требуют проверки: ${review}`);
}

main()
  .catch((error) => {
    console.error("\nОшибка:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
