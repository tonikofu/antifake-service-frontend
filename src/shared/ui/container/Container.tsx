import React from "react";
import "./Container.css";

export interface ContainerProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <div className={`container ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
