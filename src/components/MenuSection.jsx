import React from "react";

import "../styles/components/menu/menu.scss";

import { HiOutlineLanguage } from "react-icons/hi2";

const MenuSection = ({ isMenuActive, toggleMenu }) => {
  return (
    <div className="menu-container">
      {isMenuActive && (
        <div onClick={toggleMenu} className="menu-backdrop"></div>
      )}
      <div className={isMenuActive ? "menu-section-active" : "menu-section"}>
        <div className="menu-section__items">
          <a href="#home" className="menu-section__items__item">
            Home
          </a>
          <a href="#tenders" className="menu-section__items__item">
            Tenders
          </a>
          <a href="#contact" className="menu-section__items__item">
            Contact
          </a>
          <a href="#login" className="menu-section__items__item">
            Login
          </a>
          <a href="#login" className="menu-section__items__item">
            Sign up
          </a>
          <div className="menu-section__items__item">
            <HiOutlineLanguage />
            English
          </div>
          <div className="menu-section__items__input-container">
            <input
              className="menu-section__items__input-container__input"
              type="text"
              placeholder="Search Keyword"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
