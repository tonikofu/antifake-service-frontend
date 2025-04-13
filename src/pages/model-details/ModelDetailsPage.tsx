import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@/shared/ui/typography/Typography";
import { fetchModelDetails, ModelDetails } from "@/shared/api/modelsApi";
import "./ModelDetailsPage.css";

const ModelDetailsPage: React.FC = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const [modelDetails, setModelDetails] = useState<ModelDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModelDetails = async () => {
      try {
        if (!modelId) throw new Error("Model ID is required");
        const data = await fetchModelDetails(parseInt(modelId));
        setModelDetails(data);
      } catch (err) {
        setError("Failed to load model details");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadModelDetails();
  }, [modelId]);

  if (isLoading) {
    return <Typography.p>Loading...</Typography.p>;
  }

  if (error || !modelDetails) {
    return <Typography.p className="error">{error}</Typography.p>;
  }

  return (
    <div className="model-details">
      <Typography.h1>{modelDetails.modelName}</Typography.h1>

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
                <td>{metric.precision.toFixed(3)}</td>
                <td>{metric.recall.toFixed(3)}</td>
                <td>{metric.f1Score.toFixed(3)}</td>
                <td>{metric.support}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModelDetailsPage;
