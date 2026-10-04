import type { GameInventory } from "./types";

function isSlotLine(line: string): boolean {
  return /^(ps5|ps4)\s+(client|offline)\b/i.test(line);
}

export function parserInventory(text: string): GameInventory[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  let ps5_stock = 0;
  let ps4_stock = 0;
  let currentGame = "";

  const games: GameInventory[] = [];

  for (const line of lines) {
    const lowerLine = line.toLowerCase();

    const isPs5 = /^ps5\s+client\b/i.test(lowerLine);
    const isPs4 = /^ps4\s+client\b/i.test(lowerLine);
    const isSlot = isSlotLine(line);

    if (isPs5 && line.includes("✅")) {
      ps5_stock += 1;
    }

    if (isPs4 && line.includes("✅")) {
      ps4_stock += 1;
    }

    if (!isSlot) {
      if (currentGame !== "") {
        games.push({
          gameTitle: currentGame,
          ps5_stock,
          ps4_stock,
        });
      }

      currentGame = line;
      ps5_stock = 0;
      ps4_stock = 0;
    }
  }

  if (currentGame !== "") {
    games.push({
      gameTitle: currentGame,
      ps5_stock,
      ps4_stock,
    });
  }

  const groupedGames = new Map<string, GameInventory>();

  for (const game of games) {
    const existingGame = groupedGames.get(game.gameTitle);

    if (existingGame) {
      existingGame.ps4_stock += game.ps4_stock;
      existingGame.ps5_stock += game.ps5_stock;
    } else {
      groupedGames.set(game.gameTitle, {
        ...game,
      });
    }
  }

  return Array.from(groupedGames.values());
}
