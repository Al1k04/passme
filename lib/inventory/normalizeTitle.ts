export function normalizeTitle(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[™®©]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[–—−-]/g, " ")
    .replace(/[,:.!?'"`/\\|]/g, " ")
    .replace(/&/g, " and ")
    .replace(/\bглава\b/g, "chapter")
    .replace(/\bиздание\b/g, "edition")
    .replace(/\bверсия\b/g, "version")
    .replace(/\bstandart\b/g, "standard")
    .replace(/([a-zа-я])(\d)/gi, "$1 $2")
    .replace(/(\d)([a-zа-я])/gi, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

export function getComparableTitle(title: string): string {
  return normalizeTitle(title)
    .replace(/^ea sports\s+/i, "")
    .replace(
      /\b(ultimate|deluxe|standard|complete|premium|gold|definitive|digital|edition|bundle|collection|goty|game of the year|cross gen|cross-gen|anniversary|special|originals|resynced|version|remastered|enhanced|directors cut|director's cut|day one|iconic|elite|baller|tournament|x factor|x-factor|next stop|championship)\b/gi,
      "",
    )
    .replace(/\b(a|an|the)\b/gi, "")
    .replace(/\bmk1\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
