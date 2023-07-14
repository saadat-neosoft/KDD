import React from "react";

import "../../styles/components/home/contact-us.scss";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useRef } from "react";

const ContactUs = () => {
  function onChange(value) {
    setCaptchaValue(value);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    recaptchaRef.current.reset();
  };
  return (
    <section className="contact-us d-flex ">
      <div className="contact-us__card">
        <div className="contact-us__card__title">Contact Us</div>
        <div className="contact-us__card__text">
          In case of any query. Please contact us
        </div>

        <div className="contact-us__card__call d-flex gap-3 align-items-center ">
          <FiPhoneCall size={24} />
          +91-9897989898
        </div>
        <div className="contact-us__card__email d-flex gap-3 align-items-center">
          <HiOutlineMail size={24} />
          hello@kdd.com
        </div>
        <div className="contact-us__card__location d-flex gap-2 ">
          <CiLocationOn size={50} />
          <div className="contact-us__card__location__address">
            <span className="contact-us__card__location__address__text">
              The Kuwaiti Danish Dairy Co KCSC, Sabhan Industrial Area
            </span>{" "}
            Block 1, Street-104, Building 157, PO Box 835, Safat 13009 Sabhan,
            Kuwait
          </div>
        </div>
      </div>
      <div className="contact-us__form-section">
        <form
          onSubmit={handleSubmit}
          className="contact-us__form-section__form d-flex flex-column gap-4 "
        >
          <div className="contact-us__form-section__form__top d-flex justify-content-between ">
            <input
              type="text"
              className="contact-us__form-section__form__top__input p-3 "
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="contact-us__form-section__form__top__input p-3 "
              value={email}
              placeholder="Enter Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact-us__form-section__form__middle">
            <textarea
              value={message}
              placeholder="Write a message/query"
              className="contact-us__form-section__form__middle__textarea w-100 p-3 "
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="contact-us__form-section__form__bottom d-flex align-items-center justify-content-between  ">
            <ReCAPTCHA
              sitekey="6Ld6GyInAAAAAPCs-9789e1QPwg7pHwrw3iyqM2k"
              onChange={onChange}
              className="contact-us__form-section__form__bottom__cap"
              ref={recaptchaRef}
            />
            <button
              type="submit"
              className="contact-us__form-section__form__bottom__submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
