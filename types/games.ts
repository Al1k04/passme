export type Game = {
  id: number;
  slug: string;
  title: string;
  price: number;
  oldPrice?: number;
  image?: string;
  genres: string[];
};
