import React from "react";

import classNames from "classnames";

import "./Button.css";

export type ButtonProps = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = ({
  className,
  onClick,
  disabled = false,
  children,
}: ButtonProps) => (
  <button
    className={classNames("button", className)}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
