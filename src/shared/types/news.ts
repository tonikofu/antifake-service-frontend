export type News = {
  id: string;
  title: string;
  article: string;
  className: "FAKE" | "REAL";
  probability: number;
  source: string;
  createdAt: string;
};
