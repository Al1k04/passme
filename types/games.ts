export type Game = {
  id: number;
  slug: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  genres: string[];
  pricePrimaryPs5: number | null;
  pricePrimaryPs4: number | null;
  priceSecondaryPs5: number | null;
  priceSecondaryPs4: number | null;
};
