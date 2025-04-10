import React from "react";

import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import Container from "@/components/main/Main";

export type GameLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default PageLayout;
