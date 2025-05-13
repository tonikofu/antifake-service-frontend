import React, { useState, useEffect } from "react";
import { Typography } from "@/shared/ui/typography/Typography";
import Button from "@/shared/ui/button/Button";
import "./PredictionPage.css";
import { fetchModels } from "@/shared/api/modelsApi";
import { createPrediction } from "@/shared/api/predictionApi";
import { Model } from "@/shared/types/model";
import { useNavigate } from "react-router-dom";
import Container from "@/shared/ui/container/Container";

const PredictionPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [content, setContent] = useState("");
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const [modelsList, setModelsList] = useState<Model[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
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

    loadModels();
  }, []);

  if (isLoading) {
    return (
      <Typography.p className="models-page__loader">Загрузка...</Typography.p>
    );
  }

  if (error) {
    return <Typography.p className="models-page__error">{error}</Typography.p>;
  }

  const handleModelToggle = (modelId: string) => {
    setSelectedModels((prev) =>
      prev.includes(modelId)
        ? prev.filter((id) => id !== modelId)
        : [...prev, modelId],
    );
  };

  const isFormValid =
    title.trim() !== "" &&
    source.trim() !== "" &&
    content.trim() !== "" &&
    selectedModels.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      const response = await createPrediction({
        title,
        article: content,
        source,
        modelsId: selectedModels,
      });
      navigate(`/news/${response.newsId}`);
    } catch (error) {
      setError("Ошибка при отправке формы");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <Typography.h2 className="prediction-page__title">
        Проверка новости
      </Typography.h2>

      <Container className="prediction-page__form">
        <div className="prediction-page__form-group">
          <label htmlFor="title">Заголовок новости</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="prediction-page__input"
            placeholder="Введите заголовок новости"
            required
          />
        </div>

        <div className="prediction-page__form-group">
          <label htmlFor="source">Источник новости</label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="prediction-page__input"
            placeholder="Введите источник новости"
            required
          />
        </div>

        <div className="prediction-page__form-group">
          <label htmlFor="content">Текст новости</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="prediction-page__textarea"
            placeholder="Введите текст новости"
            required
          />
        </div>

        <div className="prediction-page__form-group">
          <label>Выберите модели для анализа новости</label>
          <div className="prediction-page__models-list">
            {modelsList.map((model) => (
              <div key={model.id} className="prediction-page__model-item">
                <input
                  type="checkbox"
                  id={`model-${model.id}`}
                  checked={selectedModels.includes(model.id)}
                  onChange={() => handleModelToggle(model.id)}
                />
                <label htmlFor={`model-${model.id}`}>{model.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="prediction-page__form-footer">
          <Button
            className="prediction-page__submit"
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Проверить"}
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default PredictionPage;
