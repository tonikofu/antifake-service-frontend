import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography } from "@/shared/ui/typography/Typography";
import { fetchModelDetails, ModelDetails } from "@/shared/api/modelsApi";
import "./ModelDetailsPage.css";
import Container from "@/shared/ui/container/Container";
import Button from "@/shared/ui/button/Button";
const ModelDetailsPage: React.FC = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const navigate = useNavigate();
  const [modelDetails, setModelDetails] = useState<ModelDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModelDetails = async () => {
      try {
        if (!modelId) throw new Error("ID модели не указан");
        const data = await fetchModelDetails(parseInt(modelId));
        setModelDetails(data);
      } catch (err) {
        setError("Не удалось загрузить детали модели");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadModelDetails();
  }, [modelId]);

  const handleBack = () => {
    navigate("/models");
  };

  if (isLoading) {
    return <Typography.p>Загрузка...</Typography.p>;
  }

  if (error || !modelDetails) {
    return <Typography.p className="error">{error}</Typography.p>;
  }

  return (
    <React.Fragment>
      <div className="news-detail__header">
        <Button onClick={handleBack}>Назад</Button>
      </div>
      <Container>
        <Typography.h2>{modelDetails.modelName}</Typography.h2>

        <div className="model-details__table-container">
          <table className="model-details__table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>F1-Score</th>
                <th>Support</th>
              </tr>
            </thead>
            <tbody>
              {modelDetails.metrics.map((metric) => (
                <tr key={metric.classId}>
                  <td>{metric.className}</td>
                  <td>{metric.precision.toFixed(2)}</td>
                  <td>{metric.recall.toFixed(2)}</td>
                  <td>{metric.f1Score.toFixed(2)}</td>
                  <td>{metric.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ModelDetailsPage;
