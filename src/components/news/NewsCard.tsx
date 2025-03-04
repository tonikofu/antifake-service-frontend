import React from "react";
import { useNavigate } from "react-router-dom";

// import Button from "@/shared/ui/button/Button";
import { Typography } from "@/shared/ui/typography/Typography";
import { News } from "@/shared/types/news";

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
    <div className="news-card">
      <div className="news-card__info">
        <div className="news-card__prediction">
          <span
            className={`news-card__status ${news.isPredictedAsFake ? "news-card__status_fake" : "news-card__status_real"}`}
          >
            {news.isPredictedAsFake ? "FAKE" : "REAL"}
          </span>
          <Typography.p>{(news.probability * 100).toFixed(1)}%</Typography.p>
        </div>
        <Typography.p>
          {new Date(news.predictionDate).toLocaleDateString()}
        </Typography.p>
      </div>

      <Typography.h2 className="news-card__title">{news.title}</Typography.h2>
      <Typography.p className="news-card__content">
        {news.content.slice(0, 1024)}...
      </Typography.p>

      <Button className="news-card__button" onClick={handleReadMore}>
        Читать полностью
      </Button>
    </div>
  );
};

export default NewsCard;
