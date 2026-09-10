import { readFile, writeFile } from "fs/promises";

const games = JSON.parse(await readFile("./data/games.json", "utf-8"));

for (const game of games) {
  game.oldPrice = game.price + 25;
}

await writeFile("./data/games.json", JSON.stringify(games, null, 2), "utf-8");
console.log("Готово, добавлено oldPrice");
