import React from "react";

import heroImg from "../../assets/Homepage Design/Mask Group 6.png";

import arrowImg from "../../assets/Homepage Design/Icon feather-arrow-down.svg";

import "../../styles/components/home/hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `${heroImg}` }}>
      <div className="hero__top-text">Procurement For KDD</div>
      <div className="hero__title">
        <span className="hero__title__first">Bidding</span> Systems
      </div>
      <p className="hero__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim.
        Veniam, quis nostrud exercitation ullamco laboris aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore...
      </p>
      <button className="hero__btn">
        <Link to="/dashboard" className="text-black">
          Get Started
        </Link>
        <img src={arrowImg} alt="" />
      </button>
      <img src={heroImg} alt="" className="hero__img" />
    </div>
  );
};

export default Hero;
