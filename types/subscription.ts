export type Subscription = {
  id: number;
  slug: string;
  title: string;
  images: string[];
  periods: {
    months: number;
    prices: { label: string; value: number }[];
  }[];
  features: {
    ka: string[];
    ru: string[];
    en: string[];
  };
};
