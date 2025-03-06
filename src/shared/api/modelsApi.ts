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
