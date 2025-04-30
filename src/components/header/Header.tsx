import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
            >
              <p className="header__nav-link-text">Новости</p>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/prediction"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
            >
              <p className="header__nav-link-text">Предсказание</p>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/models"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
            >
              <p className="header__nav-link-text">Модели</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
