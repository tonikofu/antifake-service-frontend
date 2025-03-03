import React from "react";

import NewsCard from "@/components/news/NewsCard";
import { Typography } from "@/shared/ui/typography/Typography";
import { News } from "@/shared/types/news";

import "./NewsListPage.css";

const NewsListPage = () => {
  const newsList: News[] = [
    {
      id: "1",
      title: "Sample News Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod purus vitae libero tempus luctus. Praesent suscipit dictum justo, sit amet lobortis tortor consectetur ut. Vivamus porttitor, nibh et rutrum porta, ligula nisl euismod arcu, et pellentesque ligula lacus ac metus. Sed hendrerit ipsum quis odio tincidunt laoreet. Maecenas maximus arcu sed turpis varius, sit amet suscipit libero iaculis. Nam augue nulla, tincidunt ac ex et, bibendum volutpat turpis. Praesent vel mi a ligula hendrerit lobortis. Donec eleifend dui risus, hendrerit faucibus nunc euismod vel. Nunc erat ex, porta et nunc mollis, commodo volutpat nibh. Praesent neque leo, efficitur a malesuada ac, sollicitudin a lorem. Curabitur facilisis et lectus eu aliquet. Maecenas id tortor lobortis libero finibus iaculis. Cras eget nulla sit amet odio vulputate fringilla.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas maximus commodo risus sed placerat. Nulla tincidunt vulputate orci nec venenatis. Quisque eu rutrum eros. Aenean rhoncus ullamcorper sapien in varius. Pellentesque maximus leo et felis consectetur, ac semper est porttitor. Aliquam pharetra, sapien quis aliquet volutpat, nulla leo sollicitudin nisi, at molestie nulla ante in risus.",
      predictionDate: "2024-03-20",
      isPredictedAsFake: true,
      probability: 0.95,
    },
    {
      id: "2",
      title: "Sample News Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod purus vitae libero tempus luctus. Praesent suscipit dictum justo, sit amet lobortis tortor consectetur ut. Vivamus porttitor, nibh et rutrum porta, ligula nisl euismod arcu, et pellentesque ligula lacus ac metus. Sed hendrerit ipsum quis odio tincidunt laoreet. Maecenas maximus arcu sed turpis varius, sit amet suscipit libero iaculis. Nam augue nulla, tincidunt ac ex et, bibendum volutpat turpis. Praesent vel mi a ligula hendrerit lobortis. Donec eleifend dui risus, hendrerit faucibus nunc euismod vel. Nunc erat ex, porta et nunc mollis, commodo volutpat nibh. Praesent neque leo, efficitur a malesuada ac, sollicitudin a lorem. Curabitur facilisis et lectus eu aliquet. Maecenas id tortor lobortis libero finibus iaculis. Cras eget nulla sit amet odio vulputate fringilla.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas maximus commodo risus sed placerat. Nulla tincidunt vulputate orci nec venenatis. Quisque eu rutrum eros. Aenean rhoncus ullamcorper sapien in varius. Pellentesque maximus leo et felis consectetur, ac semper est porttitor. Aliquam pharetra, sapien quis aliquet volutpat, nulla leo sollicitudin nisi, at molestie nulla ante in risus.",
      predictionDate: "2024-03-20",
      isPredictedAsFake: false,
      probability: 0.05,
    },
  ];

  return (
    <React.Fragment>
      <Typography.h2 className="news-page__title">Новости</Typography.h2>

      <div className="news-page__list">
        {newsList.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default NewsListPage;
