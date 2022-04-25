import React from "react";
import { useState } from "react";
import Icon from "./UI/Icon";

function Header() {
  const [language, setLanguage] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  function toggleBurger() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <div className="header">
      <nav className="nav small-container">
        <a href="google.com" className="nav__logo">
          <Icon name="azteca-oil" color="blue" size={35} />
          <span className="nav__logo__text">Azteca Oil</span>
        </a>
        <ul className={showMenu ? "nav__items active" : "nav__items"}>
          <li>Quienes Somos</li>
          <li>Operaciones</li>
          <li>Oportunidades</li>
          <li>Inversores</li>
          <li>Contáctanos</li>
        </ul>
        <div
          className={showMenu ? "burger active" : "burger"}
          onClick={toggleBurger}
        >
          <div className="burger__toggle">
            <div className="burger__toggle__top-line"></div>
            <div className="burger__toggle__middle-line"></div>
            <div className="burger__toggle__bottom-line"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
