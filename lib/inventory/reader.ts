import { readFileSync } from "node:fs";
import { join } from "node:path";

import { prisma } from "@/lib/prisma";

import { parserInventory } from "./parser";
import { normalizeTitle } from "./normalizeTitle";

async function main() {
  const filePath = join(process.cwd(), "inventory.txt");

  const text = readFileSync(filePath, "utf-8");

  const games = parserInventory(text);

  const dbGames = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  const inventoryMap = new Map<string, string>();

  for (const game of games) {
    inventoryMap.set(normalizeTitle(game.gameTitle), game.gameTitle);
  }

  const dbMap = new Map<string, string>();

  for (const game of dbGames) {
    dbMap.set(normalizeTitle(game.title), game.title);
  }

  let matched = 0;

  const matchedTitles: string[] = [];
  const onlyInInventory: string[] = [];
  const onlyInDatabase: string[] = [];

  for (const game of games) {
    const key = normalizeTitle(game.gameTitle);

    if (dbMap.has(key)) {
      matched += 1;
      matchedTitles.push(game.gameTitle);
    } else {
      onlyInInventory.push(game.gameTitle);
    }
  }

  for (const game of dbGames) {
    const key = normalizeTitle(game.title);

    if (!inventoryMap.has(key)) {
      onlyInDatabase.push(game.title);
    }
  }

  console.log("Блоков в TXT: 1709");
  console.log("Уникальных названий в TXT:", games.length);
  console.log("Игр в Prisma:", dbGames.length);
  console.log("Совпало после нормализации:", matched);

  console.log("\n--- Совпадения ---");
  console.log(matchedTitles);

  console.log("\n--- Только в TXT ---");
  console.log(onlyInInventory);

  console.log("\n--- Только в Prisma ---");
  console.log(onlyInDatabase);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
