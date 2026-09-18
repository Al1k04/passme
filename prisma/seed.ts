import { PrismaClient } from "@prisma/client";
import games from "../data/games.json";

const prisma = new PrismaClient();

async function main() {
  for (const game of games) {
    await prisma.game.upsert({
      where: { slug: game.slug },
      update: {
        title: game.title,
        price: game.price,
        oldPrice: game.oldPrice ?? null,
        image: game.image,
        genres: game.genres,
      },
      create: {
        slug: game.slug,
        title: game.title,
        price: game.price,
        oldPrice: game.oldPrice ?? null,
        image: game.image,
        genres: game.genres,
      },
    });
  }
  console.log(`Залито игр: ${games.length}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
