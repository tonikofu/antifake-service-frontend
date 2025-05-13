import React from "react";
import styles from "./ProbabilityIndicator.module.css";
import Status from "@/shared/ui/status/Status";

const ProbabilityIndicator = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.indicator}>
        <Status status="high">Правда</Status>
        <div className={styles.scaleContainer}>
          <div className={styles.percentages}>
            <span>100%</span>
            <span>50%</span>
            <span>0%</span>
          </div>
          <div className={styles.scale}>
            <div className={styles.marker} style={{ bottom: "50%" }}></div>
          </div>
        </div>
        <Status status="low">Фейк</Status>
      </div>
    </div>
  );
};

export default ProbabilityIndicator;
