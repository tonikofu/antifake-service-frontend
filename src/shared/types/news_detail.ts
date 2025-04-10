import { Prediction } from "./prediction";

export type NewsDetail = {
  newsId: string;
  title: string;
  article: string;
  className: string;
  probability: number;
  source: string;
  createdAt: string;
  predictions: Prediction[];
};
