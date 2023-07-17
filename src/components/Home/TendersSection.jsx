import "../../styles/components/home/tenders-section.scss";

import ptIcon from "../../assets/Homepage Design/Group 17.svg";
import tueIcon from "../../assets/Homepage Design/Group 19.svg";
import atIcon from "../../assets/Homepage Design/Group 20-1.svg";
import ctIcon from "../../assets/Homepage Design/Group 20.svg";
import arrowIcon from "../../assets/Homepage Design/Icon feather-arrow-down.svg";
import { useState } from "react";

import { BsDot, BsDownload } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

const TendersSection = () => {
  const [isDropDownActive, setIsDropDownActive] = useState(0);
  return (
    <section className="tenders d-flex flex-column flex-lg-row ">
      <div className="tenders__left ">
        <div className="tenders__left__title">TENDERS</div>
        <div className="tenders__left__text">
          <span className="tenders__left__text__highlight">
            Lorem ipsum dolor
          </span>{" "}
          sit amet, consectetur adipiscing elit...
        </div>
        <div className="tenders__left__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
          minim. Veniam, quis nostrud exercitation ullamco laboris aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore...
        </div>
      </div>
      <div className="tenders__right ">
        <div className="tenders__right__cards">
          <div
            className="tenders__right__cards__container"
            style={{
              boxShadow: isDropDownActive === 1 && "1px -1px 10px #ee2a2a",
            }}
          >
            <div className="tenders__right__cards__card">
              <div className="tenders__right__cards__card__left">
                <img
                  className="tenders__right__cards__card__left__icon"
                  src={ptIcon}
                  alt=""
                  style={{
                    filter:
                      isDropDownActive === 1 &&
                      "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                  }}
                />
                <div
                  className="tenders__right__cards__card__left__after"
                  style={{
                    transform:
                      isDropDownActive === 1 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 1 && "1",
                  }}
                ></div>
              </div>
              <div className="tenders__right__cards__card__right">
                <div
                  className="tenders__right__cards__card__right__title"
                  style={{ color: isDropDownActive === 1 && "#fff" }}
                >
                  <span
                    className="tenders__right__cards__card__right__title__highlight"
                    style={{ color: isDropDownActive === 1 && "#fff" }}
                  >
                    Published
                  </span>{" "}
                  Tenders
                </div>
                <div
                  className="tenders__right__cards__card__right__text"
                  style={{ color: isDropDownActive === 1 && "#fff" }}
                >
                  Below is a list of recently published tenders.
                </div>
                <button
                  className="tenders__right__cards__card__right__btn"
                  onClick={() => {
                    if (isDropDownActive === 1) return setIsDropDownActive(0);
                    setIsDropDownActive(1);
                  }}
                  style={{ color: isDropDownActive === 1 && "#fff" }}
                >
                  <img
                    className="tenders__right__cards__card__right__btn__icon"
                    src={arrowIcon}
                    alt=""
                    style={{
                      filter:
                        isDropDownActive === 1 &&
                        "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                    }}
                  />{" "}
                  {isDropDownActive === 1 ? "Close" : "Open"}
                </button>
                <div
                  className="tenders__right__cards__card__right__after"
                  style={{
                    transform:
                      isDropDownActive === 1 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 1 && "1",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="tenders__right__cards__card__right__dropdown-content"
              style={{
                opacity: isDropDownActive === 1 && "1",
                transform: isDropDownActive === 1 && "translateY(0)",
                pointerEvents: isDropDownActive === 1 && "auto",
                boxShadow: isDropDownActive === 1 && "1px 1px 10px #ee2a2a",
              }}
            >
              <div className="tenders__right__cards__card__right__dropdown-content__status d-flex flex-column flex-sm-row justify-content-between align-items-center ">
                <span className="tenders__right__cards__card__right__dropdown-content__title">
                  Tender Status
                </span>
                <div>
                  <span className="tenders__right__cards__card__right__dropdown-content__title me-2">
                    {" "}
                    <BsDot color="#44ba10" size={30} />
                    Active Tenders
                  </span>
                  <span className="tenders__right__cards__card__right__dropdown-content__title">
                    {" "}
                    <BsDot color="#f89239" size={30} />
                    On Hold Tenders
                  </span>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="align-self-start ">
                  <BsDot color="#44ba10" size={30} />
                </div>
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Title 1
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__time">
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        08
                      </span>{" "}
                      Hrs:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        58
                      </span>{" "}
                      Mins:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        40
                      </span>{" "}
                      Secs
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Due Date:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      02/22
                    </span>
                  </div>
                  <div className="d-flex  gap-2 mt-3 tenders__right__cards__card__right__dropdown-content__dca">
                    <span className="d-flex gap-2 tenders__right__cards__card__right__dropdown-content__download">
                      <BsDownload /> Download |
                    </span>

                    <span className="tenders__right__cards__card__right__dropdown-content__connect d-flex gap-2">
                      <BiMessage /> Connect with Us |
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__apply d-flex gap-2 align-items-center ">
                      Apply for Tender{" "}
                      <img src={arrowIcon} height="12px" alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="align-self-start ">
                  <BsDot color="#44ba10" size={30} />
                </div>
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Title 1
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__time">
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        08
                      </span>{" "}
                      Hrs:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        58
                      </span>{" "}
                      Mins:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        40
                      </span>{" "}
                      Secs
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Due Date:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      02/22
                    </span>
                  </div>
                  <div className="d-flex  gap-2 mt-3 tenders__right__cards__card__right__dropdown-content__dca">
                    <span className="d-flex gap-2 tenders__right__cards__card__right__dropdown-content__download">
                      <BsDownload /> Download |
                    </span>

                    <span className="tenders__right__cards__card__right__dropdown-content__connect d-flex gap-2">
                      <BiMessage /> Connect with Us |
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__apply d-flex gap-2 align-items-center ">
                      Apply for Tender{" "}
                      <img src={arrowIcon} height="12px" alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="align-self-start ">
                  <BsDot color="#44ba10" size={30} />
                </div>
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Title 1
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__time">
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        08
                      </span>{" "}
                      Hrs:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        58
                      </span>{" "}
                      Mins:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        40
                      </span>{" "}
                      Secs
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Due Date:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      02/22
                    </span>
                  </div>
                  <div className="d-flex  gap-2 mt-3 tenders__right__cards__card__right__dropdown-content__dca">
                    <span className="d-flex gap-2 tenders__right__cards__card__right__dropdown-content__download">
                      <BsDownload /> Download |
                    </span>

                    <span className="tenders__right__cards__card__right__dropdown-content__connect d-flex gap-2">
                      <BiMessage /> Connect with Us |
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__apply d-flex gap-2 align-items-center ">
                      Apply for Tender{" "}
                      <img src={arrowIcon} height="12px" alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="align-self-start ">
                  <BsDot color="#44ba10" size={30} />
                </div>
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Title 1
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__time">
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        08
                      </span>{" "}
                      Hrs:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        58
                      </span>{" "}
                      Mins:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__time__red">
                        40
                      </span>{" "}
                      Secs
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Due Date:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      02/22
                    </span>
                  </div>
                  <div className="d-flex  gap-2 mt-3 tenders__right__cards__card__right__dropdown-content__dca">
                    <span className="d-flex gap-2 tenders__right__cards__card__right__dropdown-content__download">
                      <BsDownload /> Download |
                    </span>

                    <span className="tenders__right__cards__card__right__dropdown-content__connect d-flex gap-2">
                      <BiMessage /> Connect with Us |
                    </span>
                    <span className="tenders__right__cards__card__right__dropdown-content__apply d-flex gap-2 align-items-center ">
                      Apply for Tender{" "}
                      <img src={arrowIcon} height="12px" alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tenders__right__cards__container"
            style={{
              boxShadow: isDropDownActive === 2 && "1px -1px 10px #ee2a2a",
            }}
          >
            <div className="tenders__right__cards__card">
              <div className="tenders__right__cards__card__left">
                <img
                  className="tenders__right__cards__card__left__icon"
                  src={tueIcon}
                  alt=""
                  style={{
                    filter:
                      isDropDownActive === 2 &&
                      "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                  }}
                />
                <div
                  className="tenders__right__cards__card__left__after"
                  style={{
                    transform:
                      isDropDownActive === 2 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 2 && "1",
                  }}
                ></div>
              </div>
              <div className="tenders__right__cards__card__right">
                <div
                  className="tenders__right__cards__card__right__title"
                  style={{ color: isDropDownActive === 2 && "#fff" }}
                >
                  <span
                    className="tenders__right__cards__card__right__title__highlight"
                    style={{ color: isDropDownActive === 2 && "#fff" }}
                  >
                    Tenders
                  </span>{" "}
                  Under Evaluation
                </div>
                <div
                  className="tenders__right__cards__card__right__text"
                  style={{ color: isDropDownActive === 2 && "#fff" }}
                >
                  Below is a list of Tenders Under Evaluation.
                </div>
                <button
                  className="tenders__right__cards__card__right__btn"
                  onClick={() => {
                    if (isDropDownActive === 2) return setIsDropDownActive(0);
                    setIsDropDownActive(2);
                  }}
                  style={{ color: isDropDownActive === 2 && "#fff" }}
                >
                  <img
                    className="tenders__right__cards__card__right__btn__icon"
                    src={arrowIcon}
                    alt=""
                    style={{
                      filter:
                        isDropDownActive === 2 &&
                        "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                    }}
                  />{" "}
                  {isDropDownActive === 2 ? "Close" : "Open"}
                </button>
                <div
                  className="tenders__right__cards__card__right__after"
                  style={{
                    transform:
                      isDropDownActive === 2 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 2 && "1",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="tenders__right__cards__card__right__dropdown-content"
              style={{
                opacity: isDropDownActive === 2 && "1",
                transform: isDropDownActive === 2 && "translateY(0)",
                pointerEvents: isDropDownActive === 2 && "auto",
                boxShadow: isDropDownActive === 2 && "1px 1px 10px #ee2a2a",
              }}
            >
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Ends On:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Published On:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      09/21
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Ends On:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Published On:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      09/21
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Ends On:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Published On:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      09/21
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Ends On:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Published On:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      09/21
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Ends On:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Published On:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      02/22
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tenders__right__cards__container"
            style={{
              boxShadow: isDropDownActive === 3 && "1px -1px 10px #ee2a2a",
            }}
          >
            <div className="tenders__right__cards__card">
              <div className="tenders__right__cards__card__left">
                <img
                  className="tenders__right__cards__card__left__icon"
                  src={atIcon}
                  alt=""
                  style={{
                    filter:
                      isDropDownActive === 3 &&
                      "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                  }}
                />
                <div
                  className="tenders__right__cards__card__left__after"
                  style={{
                    transform:
                      isDropDownActive === 3 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 3 && "1",
                  }}
                ></div>
              </div>
              <div className="tenders__right__cards__card__right">
                <div
                  className="tenders__right__cards__card__right__title"
                  style={{ color: isDropDownActive === 3 && "#fff" }}
                >
                  <span
                    className="tenders__right__cards__card__right__title__highlight"
                    style={{ color: isDropDownActive === 3 && "#fff" }}
                  >
                    Awarded
                  </span>{" "}
                  Tenders
                </div>
                <div
                  className="tenders__right__cards__card__right__text"
                  style={{ color: isDropDownActive === 3 && "#fff" }}
                >
                  Below is a list of Awarded Tenders.
                </div>
                <button
                  className="tenders__right__cards__card__right__btn"
                  onClick={() => {
                    if (isDropDownActive === 3) return setIsDropDownActive(0);
                    setIsDropDownActive(3);
                  }}
                  style={{ color: isDropDownActive === 3 && "#fff" }}
                >
                  <img
                    className="tenders__right__cards__card__right__btn__icon"
                    src={arrowIcon}
                    alt=""
                    style={{
                      filter:
                        isDropDownActive === 3 &&
                        "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                    }}
                  />{" "}
                  {isDropDownActive === 3 ? "Close" : "Open"}
                </button>
                <div
                  className="tenders__right__cards__card__right__after"
                  style={{
                    transform:
                      isDropDownActive === 3 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 3 && "1",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="tenders__right__cards__card__right__dropdown-content"
              style={{
                opacity: isDropDownActive === 3 && "1",
                transform: isDropDownActive === 3 && "translateY(0)",
                pointerEvents: isDropDownActive === 3 && "auto",
                boxShadow: isDropDownActive === 3 && "1px 1px 10px #ee2a2a",
              }}
            >
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Date of Award:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      01/23
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Date of Award:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      01/23
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Date of Award:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      01/23
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Date of Award:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      01/23
                    </span>
                  </div>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                  <div className="tenders__right__cards__card__right__dropdown-content__date">
                    Date of Award:{" "}
                    <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                      01/23
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tenders__right__cards__container"
            style={{
              boxShadow: isDropDownActive === 4 && "1px -1px 10px #ee2a2a",
            }}
          >
            <div className="tenders__right__cards__card">
              <div className="tenders__right__cards__card__left">
                <img
                  className="tenders__right__cards__card__left__icon"
                  src={ctIcon}
                  alt=""
                  style={{
                    filter:
                      isDropDownActive === 4 &&
                      "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                  }}
                />
                <div
                  className="tenders__right__cards__card__left__after"
                  style={{
                    transform:
                      isDropDownActive === 4 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 4 && "1",
                  }}
                ></div>
              </div>
              <div className="tenders__right__cards__card__right">
                <div
                  className="tenders__right__cards__card__right__title"
                  style={{ color: isDropDownActive === 4 && "#fff" }}
                >
                  <span
                    className="tenders__right__cards__card__right__title__highlight"
                    style={{ color: isDropDownActive === 4 && "#fff" }}
                  >
                    Cancelled
                  </span>{" "}
                  Tenders
                </div>
                <div
                  className="tenders__right__cards__card__right__text"
                  style={{ color: isDropDownActive === 4 && "#fff" }}
                >
                  Below is a list of Cancelled Tenders.
                </div>
                <button
                  className="tenders__right__cards__card__right__btn"
                  onClick={() => {
                    if (isDropDownActive === 4) return setIsDropDownActive(0);
                    setIsDropDownActive(4);
                  }}
                  style={{ color: isDropDownActive === 4 && "#fff" }}
                >
                  <img
                    className="tenders__right__cards__card__right__btn__icon"
                    src={arrowIcon}
                    alt=""
                    style={{
                      filter:
                        isDropDownActive === 4 &&
                        "invert(100%) sepia(1%) saturate(0%) hue-rotate(120deg) brightness(204%) contrast(102%)",
                    }}
                  />{" "}
                  {isDropDownActive === 4 ? "Close" : "Open"}
                </button>
                <div
                  className="tenders__right__cards__card__right__after"
                  style={{
                    transform:
                      isDropDownActive === 4 && "skewX(10deg) translateY(0%)",
                    opacity: isDropDownActive === 4 && "1",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="tenders__right__cards__card__right__dropdown-content"
              style={{
                opacity: isDropDownActive === 4 && "1",
                transform: isDropDownActive === 4 && "translateY(0)",
                pointerEvents: isDropDownActive === 4 && "auto",
                boxShadow: isDropDownActive === 4 && "1px 1px 10px #ee2a2a",
              }}
            >
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Cancellation Date:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Cancellation Date:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Cancellation Date:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Cancellation Date:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Cancellation Date:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Cancellation Date:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="tenders__right__cards__card__right__dropdown-content__item d-flex w-100 pt-2">
                <div className="d-flex flex-column w-100 mt-2  ">
                  <div className="d-flex justify-content-between ">
                    <span className="tenders__right__cards__card__right__dropdown-content__title">
                      Tender Title
                    </span>
                    <div className="tenders__right__cards__card__right__dropdown-content__date">
                      Cancellation Date:{" "}
                      <span className="tenders__right__cards__card__right__dropdown-content__date__num">
                        02/22
                      </span>
                    </div>
                  </div>
                  <p className="tenders__right__cards__card__right__dropdown-content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TendersSection;
