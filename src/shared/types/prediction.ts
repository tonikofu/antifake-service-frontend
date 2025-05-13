export type Prediction = {
  modelId: number;
  modelName: string;
  className: string;
  probability: number;
};

export interface PredictionRequest {
  title: string;
  article: string;
  source: string;
  modelsId: string[];
}

export interface PredictionResponse {
  newsId: string;
}
