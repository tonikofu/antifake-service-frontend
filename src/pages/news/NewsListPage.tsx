import React, { useEffect, useState } from "react";

import NewsCard from "@/components/news/NewsCard";
import { fetchNews } from "@/shared/api/newsApi";
import { Typography } from "@/shared/ui/typography/Typography";
import { News } from "@/shared/types/news";

import "./NewsListPage.css";

const NewsListPage = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNewsList(data);
      } catch (error) {
        setError("Ошибка получения новостей");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  if (isLoading) {
    return (
      <Typography.p className="news-page__loader">Загрузка...</Typography.p>
    );
  }

  if (error) {
    return <Typography.p className="news-page__error">{error}</Typography.p>;
  }

  return (
    <div className="news-page">
      <Typography.h2 className="news-page__title">Новости</Typography.h2>
      <div className="news-page__list">
        {newsList.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsListPage;
