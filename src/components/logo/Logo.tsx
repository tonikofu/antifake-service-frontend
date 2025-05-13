import React from "react";

import "./Logo.css";

const Logo = () => {
  return (
    <svg
      width="360"
      height="80"
      viewBox="0 0 360 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="23" width="30" height="33" rx="3" className="stroke" />
      <line x1="8" y1="32" x2="26" y2="32" className="stroke" />
      <line x1="8" y1="38" x2="26" y2="38" className="stroke" />
      <line x1="8" y1="44" x2="21" y2="44" className="stroke" />
      <text x="45" y="38" className="title">
        АнтиФейк
      </text>
      <text x="45" y="55" className="subtitle">
        Прогноз достоверности новостей
      </text>
    </svg>
  );
};
export default Logo;
