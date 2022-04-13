import React from "react";
import { useState } from "react";
import Logo from "../assets/icons/_main_logo.svg";

function Header() {
  const [language, setLanguage] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  function handleLanguaje() {
    setLanguage((prevState) => !prevState);
  }

  function resposiveNavBar() {
    const navWidth = document.querySelector("nav");
    console.log("width", navWidth.offsetWidth);
  }

  function toggleBurger() {
    setShowMenu((prevState) => !prevState);
    console.log("menu changed");
  }

  return (
    <div className="header">
      <nav className="nav small-container">
        <a href="google.com" className="nav__logo">
          <img src={Logo} alt="logo oil company" />
          <span>Azteca Oil</span>
        </a>
        <ul className={showMenu ? "nav__items active" : "nav__items" }>
                <li>Who We Are</li>
                <li>Operations</li>
                <li>Carrers</li>
                <li>Investors</li>
                <li>Contact Us</li>
                <li onClick={resposiveNavBar}>{language ? "Eng" : "Esp"}</li>
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
