import React, { useEffect, useState } from "react";
import ModelCard from "@/components/model/ModelCard";
import "./ModelListPage.css";
import { Typography } from "@/shared/ui/typography/Typography";
import { Model } from "@/shared/types/model";
import { fetchModels } from "@/shared/api/modelsApi";

const ModelListPage: React.FC = () => {
  const [modelsList, setModelsList] = useState<Model[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchModels();
        setModelsList(data);
      } catch (error) {
        setError("Ошибка получения моделей");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  if (isLoading) {
    return <Typography.p className="models-page__loader">Загрузка...</Typography.p>;
  }

  if (error) {
    return <Typography.p className="models-page__error">{error}</Typography.p>;
  }

  return (
    <div className="models-page">
      <Typography.h2 className="models-page__title">Модели</Typography.h2>
      <div className="models-page__grid">
        {modelsList.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default ModelListPage;
