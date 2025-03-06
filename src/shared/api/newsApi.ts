import { News } from "@/shared/types/news";

export const fetchNews = async (): Promise<News[]> => {
  try {
    const response = await fetch("/api/news");
    if (!response.ok) {
      throw new Error("Ошибка при получении новостей");
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);
    throw error;
  }
};
