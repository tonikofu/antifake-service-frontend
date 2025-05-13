import React from "react";

import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import Main from "@/components/main/Main";
import PageContainer from "@/shared/ui/page-container/PageContainer";
import ProbabilityIndicator from "@/components/probability-indicator/ProbabilityIndicator";
import styles from "./PageLayout.module.css";

export type GameLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <div className={styles.contentWrapper}>
          <PageContainer>
            <Outlet />
          </PageContainer>
          <ProbabilityIndicator />
        </div>
      </Main>
    </React.Fragment>
  );
};

export default PageLayout;
