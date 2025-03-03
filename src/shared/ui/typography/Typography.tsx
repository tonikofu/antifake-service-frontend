import React from "react";

import classNames from "classnames";

import styles from "./Typography.module.css";

export type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: TypographyProps) => {
  return <h1 className={classNames(styles.h_one, className)}>{children}</h1>;
};

const H2 = ({ children, className }: TypographyProps) => {
  return <h2 className={classNames(styles.h_two, className)}>{children}</h2>;
};

const H3 = ({ children, className }: TypographyProps) => {
  return <h3 className={classNames(styles.h_three, className)}>{children}</h3>;
};

const H4 = ({ children, className }: TypographyProps) => {
  return <h4 className={classNames(styles.h_four, className)}>{children}</h4>;
};

const P = ({ children, className }: TypographyProps) => {
  return <p className={classNames(styles.p, className)}>{children}</p>;
};

export const Typography = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
};
