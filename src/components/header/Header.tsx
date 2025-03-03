import React from "react";

import "./Header.css";
import { Typography } from "@/shared/ui/typography/Typography";

const Header = () => {
  return (
    <header className="header">
      <Typography.h1>AntiFake</Typography.h1>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <Typography.p className="header__nav-link-text">
                Новости
              </Typography.p>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <Typography.p className="header__nav-link-text">
                Предсказание
              </Typography.p>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              <Typography.p className="header__nav-link-text">
                Модели
              </Typography.p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
