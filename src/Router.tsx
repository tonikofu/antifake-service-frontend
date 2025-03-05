import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/page/PageLayout";
import NewsListPage from "./pages/news/NewsListPage";
import ModelsPage from "./pages/models/ModelsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/models" element={<ModelsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
