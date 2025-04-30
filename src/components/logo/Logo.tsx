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
      <rect x="20" y="25" width="30" height="30" rx="3" className="stroke" />
      <line x1="25" y1="32" x2="43" y2="32" className="stroke" />
      <line x1="25" y1="38" x2="43" y2="38" className="stroke" />
      <line x1="25" y1="44" x2="38" y2="44" className="stroke" />
      <rect x="60" y="30" width="4" height="20" rx="1" className="fill" />
      <rect x="70" y="20" width="50" height="40" rx="6" className="stroke" />
      <rect x="75" y="25" width="8" height="30" rx="1" className="fill" />
      <rect x="87" y="25" width="8" height="30" rx="1" className="fill" />
      <rect x="99" y="25" width="8" height="30" rx="1" className="fill" />
      <text x="140" y="38" className="title">
        АнтиФейк
      </text>
      <text x="140" y="55" className="subtitle">
        Прогноз достоверности новостей
      </text>
    </svg>
  );
};
export default Logo;
