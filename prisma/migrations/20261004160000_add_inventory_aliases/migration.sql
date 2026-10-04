CREATE TABLE "InventoryAlias" (
    "id" SERIAL NOT NULL,
    "sourceTitle" TEXT NOT NULL,
    "normalizedTitle" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryAlias_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "InventoryAlias_sourceTitle_key"
ON "InventoryAlias"("sourceTitle");

CREATE UNIQUE INDEX "InventoryAlias_normalizedTitle_key"
ON "InventoryAlias"("normalizedTitle");

CREATE INDEX "InventoryAlias_gameId_idx"
ON "InventoryAlias"("gameId");

ALTER TABLE "InventoryAlias"
ADD CONSTRAINT "InventoryAlias_gameId_fkey"
FOREIGN KEY ("gameId")
REFERENCES "Game"("id")
ON DELETE CASCADE
ON UPDATE CASCADE;