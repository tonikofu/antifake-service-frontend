import { News } from "@/shared/types/news";
import { NewsDetail } from "../types/news_detail";

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

export const fetchNewsDetail = async (id: string): Promise<NewsDetail> => {
  try {
    const response = await fetch(`/api/news/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка при получении новости");
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка при получении новости:", error);
    throw error;
  }
};
