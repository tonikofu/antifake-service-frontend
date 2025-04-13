import React from "react";
import "./ModelCard.css";
import { Typography } from "@/shared/ui/typography/Typography";
import { Model } from "@/shared/types/model";
import Status from "@/shared/ui/status/Status";
import Container from "@/shared/ui/container/Container";
import { useNavigate } from "react-router-dom";

type ModelCardProps = {
  model: Model;
};

const ModelCard = ({ model }: ModelCardProps) => {
  const navigate = useNavigate();
  const accuracyPercentage = model.accuracy.toFixed(1);
  const accuracy = model.accuracy >= 90 ? "high" : "medium";

  const handleClick = () => {
    navigate(`/models/${model.id}`);
  };

  return (
    <Container onClick={handleClick} className="model-card">
      <div className="model-card__info">
        <Typography.h2 className="model-card__title">
          {model.name}
        </Typography.h2>
      </div>
      <div className="model-card__content">
        <div className="model-card__accuracy">
          <Typography.h5>Точность</Typography.h5>
          <Status status={accuracy}>{accuracyPercentage}%</Status>
        </div>
      </div>
    </Container>
  );
};

export default ModelCard;
