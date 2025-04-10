import React from "react";

import classNames from "classnames";

import "./Container.css";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={classNames("container", className)}>{children}</div>;
};

export default Container;
