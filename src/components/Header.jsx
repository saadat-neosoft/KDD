import logo from "../assets/Homepage Design/Group-10.png";

import "../styles/components/header/header.scss";

import { HiOutlineLanguage } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlPencil } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import SearchSection from "./SearchSection";
import { useEffect, useState } from "react";
import MenuSection from "./MenuSection";
import LoginCard from "./LoginCard";
import Connect1 from "./Connect1";
import { Link } from "react-router-dom";

const Header = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isConnectActive, setIsConnectActive] = useState(false);
  const [isAvatarOptionsActive, setIsAvatarOptionsActive] = useState(false);

  useEffect(() => {
    if (isUserLoggedIn) {
      setIsConnectActive(true);
    }
  }, [isUserLoggedIn]);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="sticky-top">
      <nav className="header pt-2 pe-1 pe-lg-5 bg-white">
        <div className="container-fluid">
          <div className="header__content d-flex justify-content-between">
            <div className="header__content__logo">
              <a href="/">
                <img
                  className="img-fluid ps-2 ps-sm-5"
                  src={logo}
                  alt=""
                  height="88px"
                  width="143px"
                />
              </a>
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
                    // setIsUserLoggedIn(!isUserLoggedIn);
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
                <div
                  className="header__content__nav__avatar-icon"
                  onClick={() =>
                    setIsAvatarOptionsActive(!isAvatarOptionsActive)
                  }
                >
                  <span className="header__content__nav__avatar-icon__avatar">
                    NS
                  </span>
                  <BsChevronDown type="button" size={10} className="ms-1" />
                  {isAvatarOptionsActive && (
                    <div className="header__content__nav__avatar-icon__options">
                      <div className="header__content__nav__avatar-icon__options__active-status">
                        <span className="header__content__nav__avatar-icon__options__active-status__online-dot"></span>
                        Active User
                      </div>
                      <div className="header__content__nav__avatar-icon__options__option">
                        <SlPencil color="#989898" /> <Link>Edit Profile</Link>
                      </div>
                      <div className="header__content__nav__avatar-icon__options__option border-0 pb-0">
                        <LuLogOut color="#989898" />
                        <Link onClick={() => setIsUserLoggedIn(false)}>
                          Logout
                        </Link>
                      </div>
                    </div>
                  )}
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
      {isLoginClicked && (
        <LoginCard
          setIsLoginClicked={setIsLoginClicked}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
      )}

      {isConnectActive && (
        <Connect1
          setIsLoginClicked={setIsLoginClicked}
          setIsUserLoggedIn={setIsUserLoggedIn}
          setIsConnectActive={setIsConnectActive}
        />
      )}
    </div>
  );
};

export default Header;
