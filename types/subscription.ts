export type Subscription = {
  id: number;
  slug: string;
  title: string;
  duration: string;
  prices: { label: string; value: number }[];
  features: string[];
};
