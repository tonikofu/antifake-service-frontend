import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/page/PageLayout";
import NewsListPage from "./pages/NewsListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/news" element={<NewsListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
