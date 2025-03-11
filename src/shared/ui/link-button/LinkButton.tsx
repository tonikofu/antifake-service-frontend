import React from "react";

import classNames from "classnames";
import { ArrowRight } from "lucide-react";

import "./LinkButton.css";

export type LinkButtonProps = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const LinkButton = ({ className, onClick, children }: LinkButtonProps) => (
  <button className={classNames("link-button", className)} onClick={onClick}>
    <span>{children}</span>
    <ArrowRight className="link-button__icon" />
  </button>
);

export default LinkButton;
