import React from "react";
import ModelCard from "@/components/model/ModelCard";
import "./ModelsPage.css";
import { Typography } from "@/shared/ui/typography/Typography";

// Моковые данные для моделей
const mockModels = [
  {
    name: "Fake Detection Model v1",
    accuracy: 90.5,
  },
  {
    name: "Image Classification Model",
    accuracy: 92.3,
  },
  {
    name: "Object Detection Model",
    accuracy: 87.8,
  },
];

const ModelsPage: React.FC = () => {
  return (
    <div className="models-page">
      <Typography.h2 className="models-page__title">Модели</Typography.h2>
      <div className="models-page__grid">
        {mockModels.map((model, index) => (
          <ModelCard key={index} name={model.name} accuracy={model.accuracy} />
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
