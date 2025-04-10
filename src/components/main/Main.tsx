import React from "react";

import classNames from "classnames";

import "./Main.css";

export type MainProps = {
  children: React.ReactNode;
  className?: string;
};

const Main = ({ children, className }: MainProps) => {
  return <main className={classNames("main", className)}>{children}</main>;
};

export default Main;
