import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Typography } from "@/shared/ui/typography/Typography";
import Button from "@/shared/ui/button/Button";
import "./NewsDetailPage.css";
import { NewsDetail } from "@/shared/types/news_detail";
import { fetchNewsDetail } from "@/shared/api/newsApi";
import Status from "@/shared/ui/status/Status";
import Container from "@/shared/ui/container/Container";

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (!id) {
          setError("ID новости не указан");
          return;
        }
        const response = await fetchNewsDetail(id);
        setNews(response);
      } catch (error) {
        setError("Не удалось загрузить новость");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const handleBack = () => {
    navigate("/news");
  };

  const handleModelClick = (modelId: number) => {
    navigate(`/models/${modelId}`);
  };

  if (loading) {
    return <Typography.h2>Загрузка...</Typography.h2>;
  }

  if (error || !news) {
    return <Typography.h2>{error || "Новость не найдена"}</Typography.h2>;
  }

  return (
    <React.Fragment>
      <div className="news-detail__header">
        <Button onClick={handleBack}>Назад</Button>
        <div className="news-detail__meta">
          <Typography.p>
            {new Date(news.createdAt).toLocaleDateString()}
          </Typography.p>
          <Typography.p className="news-detail__source">
            {news.source}
          </Typography.p>
        </div>
      </div>
      <Container>
        <div className="news-detail__title-container">
          <Typography.h2 className="news-detail__title">
            {news.title}
          </Typography.h2>

          <div className="news-detail__prediction">
            <Status status={news.className === "FAKE" ? "low" : "high"}>
              {news.className === "FAKE" ? "ФЕЙК" : "ПРАВДА"}
            </Status>
            <Typography.p>{news.probability.toFixed(2)}%</Typography.p>
          </div>

          <Typography.p className="news-detail__content">
            <div className="news-detail__paragraphs">
              {news.article.split("\n").map((paragraph, idx) =>
                paragraph.trim() ? (
                  <Typography.p key={idx} className="news-detail__content">
                    {paragraph}
                  </Typography.p>
                ) : null,
              )}
            </div>
          </Typography.p>

          <div className="news-detail__predictions">
            <Typography.h3>Предсказания моделей</Typography.h3>
            <div className="news-detail__predictions-list">
              {news.predictions.map((prediction, index) => (
                <div
                  key={index}
                  className="news-detail__prediction-item"
                  onClick={() => handleModelClick(prediction.modelId)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleModelClick(prediction.modelId);
                    }
                  }}
                >
                  <Typography.p className="news-detail__model-name">
                    {prediction.modelName}
                  </Typography.p>
                  <Status
                    status={prediction.className === "FAKE" ? "low" : "high"}
                  >
                    {prediction.className === "FAKE" ? "ФЕЙК" : "ПРАВДА"}
                  </Status>
                  <Typography.p>
                    {prediction.probability.toFixed(2)}%
                  </Typography.p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default NewsDetailPage;
