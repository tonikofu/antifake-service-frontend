import React from "react";
import ModelCard from "@/components/model/ModelCard";
import "./ModelsPage.css";

// Моковые данные для моделей
const mockModels = [
  {
    name: "Face Detection Model v1",
    accuracy: 89.5,
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
      <h1 className="models-page__title">AI Models</h1>
      <div className="models-page__grid">
        {mockModels.map((model, index) => (
          <ModelCard key={index} name={model.name} accuracy={model.accuracy} />
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
