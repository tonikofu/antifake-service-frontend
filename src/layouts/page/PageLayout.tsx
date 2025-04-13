import React from "react";

import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import Main from "@/components/main/Main";
import PageContainer from "@/shared/ui/page-container/PageContainer";

export type GameLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>
    </React.Fragment>
  );
};

export default PageLayout;
