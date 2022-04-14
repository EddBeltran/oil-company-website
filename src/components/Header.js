import React from "react";
import { useState } from "react";
import Icon from "./UI/Icon";

function Header() {
  const [language, setLanguage] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  function handleLanguaje() {
    setLanguage((prevState) => !prevState);
  }

  function toggleBurger() {
    setShowMenu((prevState) => !prevState);
    console.log("menu changed");
  }

  return (
    <div className="header">
      <nav className="nav small-container">
        <a href="google.com" className="nav__logo">
          <Icon name="_main_logo" color="blue" size={35} />
          <span className="nav__logo__text">Azteca Oil</span>
        </a>
        <ul className={showMenu ? "nav__items active" : "nav__items"}>
          <li>Who We Are</li>
          <li>Operations</li>
          <li>Carrers</li>
          <li>Investors</li>
          <li>Contact Us</li>
          <li onClick={handleLanguaje}>{language ? "Eng" : "Esp"}</li>
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
