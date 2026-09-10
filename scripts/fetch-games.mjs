import "dotenv/config";
import { readFile, writeFile } from "fs/promises";

const games = JSON.parse(await readFile("./data/games.json", "utf-8"));
console.log(games.length);

const KEY = process.env.RAWG_KEY;

async function fetchGame(title) {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${KEY}&search=${title}`,
  );

  const data = await response.json();

  const first = data.results[0];

  if (!first) {
    console.log("НЕ НАЙДЕНО:", title);
    return;
  }
  const genres = first.genres.map((g) => g.name);

  return { image: first.background_image, genres };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const game of games) {
  console.log(game.id, game.title);
  const extra = await fetchGame(game.title);
  if (!extra) continue;

  Object.assign(game, extra);
  await sleep(300);
}

await writeFile("./data/games.json", JSON.stringify(games, null, 2), "utf-8");

// node scripts/fetch-games.mjs
