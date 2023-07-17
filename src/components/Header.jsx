import logo from "../assets/Homepage Design/Group-10.png";

import "../styles/components/header/header.scss";

import { HiOutlineLanguage } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchSection from "./SearchSection";
import { useState } from "react";
import MenuSection from "./MenuSection";
import LoginCard from "./LoginCard";

const Header = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    // <nav className="navbar navbar-expand-lg">
    //   <div className="container">
    //     <a className="navbar-brand">
    //       <img src={logo} alt="logo"></img>
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse  " id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a href="#home" className="nav-link header__content__nav__link">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             href="#tenders"
    //             className="nav-link header__content__nav__link"
    //           >
    //             Tenders
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             href="#contact"
    //             className="nav-link header__content__nav__link"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             href="#contact"
    //             className="nav-link header__content__nav__link"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             href="#contact"
    //             className="nav-link header__content__nav__link"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             href="#contact"
    //             className="nav-link header__content__nav__link"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>

    //       {/* <div className="header__content__nav__login-signup">
    //         <a href="#login">Login</a>/<a href="#signup">Signup</a>
    //       </div>
    //       <span>English</span>
    //       <button className="header__content__nav__search-btn">search</button> */}
    //     </div>
    //   </div>
    // </nav>
    // <nav className="header">
    //   <div className="my-container">
    //     <div className="header__content">
    //       <div className="header__content__logo">
    //         <img src={logo} alt="" />
    //       </div>

    //       <div className="header__content__nav">
    //         <a href="#home" className="header__content__nav__link">
    //           Home
    //         </a>
    //         <a href="#home" className="header__content__nav__link">
    //           Tenders
    //         </a>
    //         <a href="#home" className="header__content__nav__link">
    //           Contact
    //         </a>

    //         <div className="header__content__nav__login-signup">
    //           <a href="#login">Login</a> / <a href="#signup">Signup</a>
    //         </div>
    //         <span className="header__content__nav__lang">English</span>
    //         <button className="header__content__nav__search">Search</button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div className="sticky-top">
      <nav className="header pt-2 pe-1 pe-lg-5 bg-white">
        <div className="container-fluid">
          <div className="header__content d-flex justify-content-between">
            <div className="header__content__logo">
              <img
                className="img-fluid ps-2 ps-sm-5"
                src={logo}
                alt=""
                height="88px"
                width="143px"
              />
            </div>

            <div className="header__content__nav d-flex align-items-center">
              <a
                href="#home"
                className="header__content__nav__link pb-4 px-4  "
              >
                Home
              </a>
              <a href="#home" className="header__content__nav__link pb-4 px-4 ">
                Tenders
              </a>
              <a href="#home" className="header__content__nav__link pb-4 px-4 ">
                Contact
              </a>

              <div className="header__content__nav__login-signup py-3 px-3 mb-1 mx-4 ">
                <a
                  href="#login"
                  onClick={() => {
                    setIsLoginClicked(true);
                    setIsUserLoggedIn(!isUserLoggedIn);
                  }}
                >
                  Login
                </a>{" "}
                / <a href="#signup">Signup</a>
              </div>
              <span className="header__content__nav__lang mb-2 d-none  d-lg-flex gap-1 ">
                <HiOutlineLanguage />
                English
              </span>
              <span className="header__content__nav__hr-line"></span>
              <button
                onClick={toggleSearch}
                className="header__content__nav__search border-0 bg-transparent mb-2 ms-3"
              >
                <AiOutlineSearch color="#989898" size={24} />
              </button>

              {isUserLoggedIn && (
                <div className="header__content__nav__avatar-icon">
                  <span className="header__content__nav__avatar-icon__avatar">
                    NS
                  </span>
                  <BsChevronDown type="button" size={10} className="ms-1" />
                </div>
              )}
              <button
                onClick={toggleMenu}
                className="header__content__nav__menu border-0 bg-transparent mb-2 ms-3"
              >
                <RxHamburgerMenu color="#989898" size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <SearchSection
        isSearchActive={isSearchActive}
        toggleSearch={toggleSearch}
      />
      <MenuSection isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      {isLoginClicked && <LoginCard setIsLoginClicked={setIsLoginClicked} />}
    </div>
  );
};

export default Header;
