import {
  PredictionRequest,
  PredictionResponse,
} from "@/shared/types/prediction";

export const createPrediction = async (
  data: PredictionRequest,
): Promise<PredictionResponse> => {
  try {
    const response = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создании предсказания");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка при создании предсказания:", error);
    throw error;
  }
};
