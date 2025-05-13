import { Model } from "@/shared/types/model";

export const fetchModels = async (): Promise<Model[]> => {
  try {
    const response = await fetch("/api/models");
    if (!response.ok) {
      throw new Error("Ошибка при получении моделей");
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка при получении моделей:", error);
    throw error;
  }
};

export interface ModelMetrics {
  classId: number;
  className: string;
  precision: number;
  recall: number;
  f1Score: number;
  support: number;
}

export interface ModelDetails {
  modelId: number;
  modelName: string;
  modelDescription: string;
  accuracyPlotImage: string;
  lossFunctionPlotImage: string;
  metrics: ModelMetrics[];
}

export const fetchModelDetails = async (
  modelId: number,
): Promise<ModelDetails> => {
  const response = await fetch(`/api/models/${modelId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch model details");
  }
  return response.json();
};
