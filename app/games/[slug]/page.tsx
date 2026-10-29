import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import GameDetails from "@/app/components/GameDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function GamePage({ params }: Props) {
  const { slug } = await params;

  const game = await prisma.game.findUnique({ where: { slug } });

  if (!game) notFound();

  const prices = [
    { label: "Primary PS5", value: game.pricePrimaryPs5 },
    { label: "Primary PS4", value: game.pricePrimaryPs4 },
    { label: "Secondary PS5", value: game.priceSecondaryPs5 },
  ].filter((p) => p.value !== null);

  return <GameDetails game={game} />;
}
