import "../../styles/components/home/tenders-section.scss";

import ptIcon from "../../assets/Homepage Design/Group 17.svg";
import tueIcon from "../../assets/Homepage Design/Group 19.svg";
import atIcon from "../../assets/Homepage Design/Group 20-1.svg";
import ctIcon from "../../assets/Homepage Design/Group 20.svg";
import arrowIcon from "../../assets/Homepage Design/Icon feather-arrow-down.svg";
import { useState } from "react";

import { BsDot } from "react-icons/bs";

const TendersSection = () => {
  const [isDropDownActive, setIsDropDownActive] = useState(0);
  return (
    <section className="tenders d-flex ">
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
          <div className="tenders__right__cards__card">
            <div className="tenders__right__cards__card__left">
              <img
                className="tenders__right__cards__card__left__icon"
                src={ptIcon}
                alt=""
              />
            </div>
            <div className="tenders__right__cards__card__right">
              <div className="tenders__right__cards__card__right__title">
                <span className="tenders__right__cards__card__right__title__highlight">
                  Published
                </span>{" "}
                Tenders
              </div>
              <div className="tenders__right__cards__card__right__text">
                Below is a list of recently published tenders.
              </div>
              <button
                className="tenders__right__cards__card__right__btn"
                onClick={() => {
                  if (isDropDownActive === 1) return setIsDropDownActive(0);
                  setIsDropDownActive(1);
                }}
              >
                <img
                  className="tenders__right__cards__card__right__btn__icon"
                  src={arrowIcon}
                  alt=""
                />{" "}
                Open
              </button>
              <div
                className="tenders__right__cards__card__right__dropdown-content"
                style={{
                  opacity: isDropDownActive === 1 && "1",
                  transform: isDropDownActive === 1 && "translateY(0)",
                  pointerEvents: isDropDownActive === 1 && "auto",
                }}
              >
                <div className="tenders__right__cards__card__right__dropdown-content__status d-flex justify-content-between align-items-center ">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labor et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tenders__right__cards__card">
            <div className="tenders__right__cards__card__left">
              <img
                className="tenders__right__cards__card__left__icon"
                src={tueIcon}
                alt=""
              />
            </div>
            <div className="tenders__right__cards__card__right">
              <div className="tenders__right__cards__card__right__title">
                <span className="tenders__right__cards__card__right__title__highlight">
                  Tenders
                </span>{" "}
                Under Evaluation
              </div>
              <div className="tenders__right__cards__card__right__text">
                Below is a list of Tenders Under Evaluation.
              </div>
              <button
                className="tenders__right__cards__card__right__btn"
                onClick={() => {
                  if (isDropDownActive === 2) return setIsDropDownActive(0);
                  setIsDropDownActive(2);
                }}
              >
                <img
                  className="tenders__right__cards__card__right__btn__icon"
                  src={arrowIcon}
                  alt=""
                />{" "}
                Open
              </button>
              <div
                className="tenders__right__cards__card__right__dropdown-content"
                style={{
                  opacity: isDropDownActive === 2 && "1",
                  transform: isDropDownActive === 2 && "translateY(0)",
                  pointerEvents: isDropDownActive === 2 && "auto",
                }}
              >
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
              </div>
            </div>
          </div>
          <div className="tenders__right__cards__card">
            <div className="tenders__right__cards__card__left">
              <img
                className="tenders__right__cards__card__left__icon"
                src={atIcon}
                alt=""
              />
            </div>
            <div className="tenders__right__cards__card__right">
              <div className="tenders__right__cards__card__right__title">
                <span className="tenders__right__cards__card__right__title__highlight">
                  Awarded
                </span>{" "}
                Tenders
              </div>
              <div className="tenders__right__cards__card__right__text">
                Below is a list of Awarded Tenders.
              </div>
              <button
                className="tenders__right__cards__card__right__btn"
                onClick={() => {
                  if (isDropDownActive === 3) return setIsDropDownActive(0);
                  setIsDropDownActive(3);
                }}
              >
                <img
                  className="tenders__right__cards__card__right__btn__icon"
                  src={arrowIcon}
                  alt=""
                />{" "}
                Open
              </button>
              <div
                className="tenders__right__cards__card__right__dropdown-content"
                style={{
                  opacity: isDropDownActive === 3 && "1",
                  transform: isDropDownActive === 3 && "translateY(0)",
                  pointerEvents: isDropDownActive === 3 && "auto",
                }}
              >
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
              </div>
            </div>
          </div>
          <div className="tenders__right__cards__card">
            <div className="tenders__right__cards__card__left">
              <img
                className="tenders__right__cards__card__left__icon"
                src={ctIcon}
                alt=""
              />
            </div>
            <div className="tenders__right__cards__card__right">
              <div className="tenders__right__cards__card__right__title">
                <span className="tenders__right__cards__card__right__title__highlight">
                  Cancelled
                </span>{" "}
                Tenders
              </div>
              <div className="tenders__right__cards__card__right__text">
                Below is a list of Cancelled Tenders.
              </div>
              <button
                className="tenders__right__cards__card__right__btn"
                onClick={() => {
                  if (isDropDownActive === 4) return setIsDropDownActive(0);
                  setIsDropDownActive(4);
                }}
              >
                <img
                  className="tenders__right__cards__card__right__btn__icon"
                  src={arrowIcon}
                  alt=""
                />{" "}
                Open
              </button>
              <div
                className="tenders__right__cards__card__right__dropdown-content"
                style={{
                  opacity: isDropDownActive === 4 && "1",
                  transform: isDropDownActive === 4 && "translateY(0)",
                  pointerEvents: isDropDownActive === 4 && "auto",
                }}
              >
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
                <div>dropdown</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TendersSection;