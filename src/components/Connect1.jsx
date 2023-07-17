import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../styles/components/connect/connect.scss";
import { RxCross2 } from "react-icons/rx";

const Connect1 = ({
  setIsLoginClicked,
  setIsUserLoggedIn,
  setIsConnectActive,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phoneNumber, message);
    setIsConnectActive(false);
  };
  return (
    <div className="connect">
      <div className="connect__card">
        <div className="connect__card__header">
          <span className="connect__card__header__title">
            <span className="connect__card__header__title__highlight">
              Connect{" "}
            </span>
            with us
          </span>
          <button
            className="border-0 d-flex align-items-center justify-content-center bg-light p-2"
            onClick={() => setIsConnectActive(false)}
          >
            <RxCross2 size={20} strokeWidth={0.5} />
          </button>
        </div>

        <form className="connect__card__form">
          <label
            htmlFor="name"
            className="connect__card__form__label d-flex flex-column gap-2 mb-4"
          >
            <span>
              Name <span className="form-star">*</span>
            </span>

            <input
              className="connect__card__form__input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label
            htmlFor="email"
            className="connect__card__form__label d-flex flex-column gap-2 mb-4"
          >
            <span>
              Email Address <span className="form-star">*</span>
            </span>
            <input
              className="connect__card__form__input"
              type="text"
              id="email"
              name="email"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label
            htmlFor="number"
            className="connect__card__form__label d-flex flex-column gap-2 mb-4"
          >
            <span>
              Telephone Number <span className="form-star">*</span>
            </span>
            <PhoneInput
              international
              defaultCountry="IN"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="phone"
              id="number"
              name="number"
            />
          </label>
          <label
            htmlFor="message"
            className="connect__card__form__label d-flex flex-column gap-2 mb-4"
          >
            <span>
              Message/Query <span className="form-star">*</span>
            </span>
            <textarea
              className="connect__card__form__input pb-5"
              type="text"
              id="message"
              name="message"
              placeholder="Write a message/query"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </label>

          <div className="d-flex align-items-center justify-content-end ">
            <button
              type="submit"
              className="connect__card__form__btn"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect1;
