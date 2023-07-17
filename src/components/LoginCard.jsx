import "../styles/components/login/login.scss";

import { RxCross2 } from "react-icons/rx";

const LoginCard = ({ setIsLoginClicked }) => {
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card__header">
          <span className="login__card__header__title">
            <span className="login__card__header__title__highlight">
              Login{" "}
            </span>
            as a supplier
          </span>
          <button
            className="border-0 d-flex align-items-center justify-content-center bg-light p-2"
            onClick={() => setIsLoginClicked(false)}
          >
            <RxCross2 size={20} strokeWidth={0.5} />
          </button>
        </div>
        <div className="login__card__text">
          Not registered yet.{" "}
          <span className="login__card__text__link">
            Sign up for an account
          </span>
        </div>
        <form className="login__card__form">
          <label
            htmlFor="email"
            className="login__card__form__label d-flex flex-column gap-2 mb-4"
          >
            Email or Username
            <input
              className="login__card__form__input"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label
            htmlFor="password"
            className="login__card__form__label d-flex flex-column gap-2 mb-3 "
          >
            Password
            <input
              className="login__card__form__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <div className="d-flex justify-content-end ">
            <a
              href="#forgot-password"
              className="login__card__form__forgot-password"
            >
              Forgot Password?
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <button className="login__card__form__btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
