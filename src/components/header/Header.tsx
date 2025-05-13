import React from "react";
import { NavLink } from "react-router-dom";
import { Newspaper, Activity, Database } from "lucide-react";

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
              <span className="header__nav-link-content">
                <span className="header__nav-link-icon">
                  <Newspaper size={18} />
                </span>
                <span className="header__nav-link-text">Новости</span>
              </span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/prediction"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
            >
              <span className="header__nav-link-content">
                <span className="header__nav-link-icon">
                  <Activity size={18} />
                </span>
                <span className="header__nav-link-text">Предсказание</span>
              </span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/models"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
            >
              <span className="header__nav-link-content">
                <span className="header__nav-link-icon">
                  <Database size={18} />
                </span>
                <span className="header__nav-link-text">Модели</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
