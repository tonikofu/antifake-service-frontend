export type Prediction = {
  modelName: string;
  className: string;
  probability: string;
};

export interface PredictionRequest {
  title: string;
  article: string;
  modelsId: string[];
}

export interface PredictionResponse {
  newsId: string;
}
