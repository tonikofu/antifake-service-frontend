import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/page/PageLayout";
import NewsListPage from "./pages/news-list/NewsListPage";
import NewsDetailPage from "./pages/news-detail/NewsDetailPage";
import ModelListPage from "./pages/models/ModelListPage";
import PredictionPage from "./pages/prediction/PredictionPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/models" element={<ModelListPage />} />
          <Route path="/prediction" element={<PredictionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
