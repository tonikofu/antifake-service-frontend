import React from "react";
import "./ModelCard.css";
import { Typography } from "@/shared/ui/typography/Typography";

type ModelCardProps = {
  name: string;
  accuracy: number;
};
const ModelCard = ({ name, accuracy }: ModelCardProps) => {
  return (
    <div className="model-card">
      <div className="model-card__info">
        <Typography.h2 className="model-card__title">{name}</Typography.h2>
      </div>
      <div className="model-card__content">
        <div className="model-card__accuracy">
          <Typography.h3>Точность</Typography.h3>
          <div
            className={`model-card__status ${accuracy >= 90 ? "model-card__status_high" : "model-card__status_medium"}`}
          >
            {accuracy.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
