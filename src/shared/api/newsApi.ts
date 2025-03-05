import { News } from "@/shared/types/news";

export const fetchNews = async (): Promise<News[]> => {
  try {
    const response = await fetch('/api/news');
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}; 