import React from "react";

import classNames from "classnames";

import "./Status.css";

export type StatusProps = {
  className?: string;
  children?: React.ReactNode;
  status: "high" | "medium" | "low";
};

const Status = ({ className, children, status }: StatusProps) => (
  <div
    className={classNames("card__status", className, {
      "card__status_high": status === "high",
      "card__status_medium": status === "medium",
      "card__status_low": status === "low",
    })}
  >
    {children}
  </div>
);

export default Status;
