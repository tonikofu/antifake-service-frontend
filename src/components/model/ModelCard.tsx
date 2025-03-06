import React from "react";
import "./ModelCard.css";
import { Typography } from "@/shared/ui/typography/Typography";
import { Model } from "@/shared/types/model";

type ModelCardProps = {
  model: Model;
};

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <div className="model-card">
      <div className="model-card__info">
        <Typography.h2 className="model-card__title">
          {model.name}
        </Typography.h2>
      </div>
      <div className="model-card__content">
        <div className="model-card__accuracy">
          <Typography.h5>Точность</Typography.h5>
          <div
            className={`model-card__status ${model.accuracy >= 90 ? "model-card__status_high" : "model-card__status_medium"}`}
          >
            {model.accuracy.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
