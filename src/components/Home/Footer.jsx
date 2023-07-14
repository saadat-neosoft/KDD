import fbIcon from "../../assets/Homepage Design/facebook.png";
import ytIcon from "../../assets/Homepage Design/youtube.png";
import instaIcon from "../../assets/Homepage Design/instagram.png";
import logo from "../../assets/Homepage Design/Group-10.png";
import "../../styles/components/home/footer.scss";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-around ">
      <div className="footer__logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer__quick-links d-flex flex-column gap-4">
        <div className="footer__quick-links__title">Quick Links</div>
        <div className="footer__quick-links__links">Privacy Policy</div>
        <div className="footer__quick-links__links">Terms of use</div>
      </div>
      <div className="footer__connect">
        <div className="footer__connect__title mb-3">Connect with Us</div>
        <div className="footer__connect__icons d-flex align-items-center gap-3 ">
          <a href="#fb">
            <img src={fbIcon} alt="" />
          </a>
          <a href="#yt">
            <img src={ytIcon} alt="" />
          </a>
          <a href="#insta">
            <img src={instaIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
