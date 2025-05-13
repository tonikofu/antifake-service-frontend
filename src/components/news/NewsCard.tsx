import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/ui/typography/Typography";
import { News } from "@/shared/types/news";
import Status from "@/shared/ui/status/Status";
import Container from "@/shared/ui/container/Container";

import "./NewsCard.css";
import Button from "@/shared/ui/button/Button";

type NewsCardProps = {
  news: News;
};

const NewsCard = ({ news }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${news.id}`);
  };

  return (
    <Container>
      <div className="news-card__info">
        <div className="news-card__prediction">
          <Status status={news.className === "FAKE" ? "low" : "high"}>
            {news.className === "FAKE" ? "ФЕЙК" : "ПРАВДА"}
          </Status>
          <Typography.p>{news.probability.toFixed(1)}%</Typography.p>
        </div>
        <Typography.p>
          {new Date(news.createdAt).toLocaleDateString()}
        </Typography.p>
      </div>

      <Typography.h2 className="news-card__title">{news.title}</Typography.h2>
      <div className="news-card__paragraphs">
        {news.article
          .slice(0, 1024)
          .split("\n")
          .map((paragraph, idx) =>
            paragraph.trim() ? (
              <Typography.p key={idx} className="news-card__content">
                {paragraph}
              </Typography.p>
            ) : null,
          )}
      </div>

      <div className="news-card__footer">
        <Button className="news-card__button" onClick={handleReadMore}>
          Читать полностью
        </Button>
        <Typography.p className="news-card__source">{news.source}</Typography.p>
      </div>
    </Container>
  );
};

export default NewsCard;
