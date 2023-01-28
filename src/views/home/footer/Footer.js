import React from "react";
import Logo from "../../../assets/icons/Logo.svg";
import DarkLogo from "../../../assets/icons/dark-logo.svg";
import telegram from "../../../assets/icons/icons8-telegram-app.svg";
import twitter from "../../../assets/icons/icons8-twitter (1).svg";
import facebook from "../../../assets/icons/icons8-facebook-f (1).svg";
import instagram from "../../../assets/icons/icons8-instagram (1).svg";
import linkedin from "../../../assets/icons/icons8-linkedin-2 (1).svg";

import "./footer.css";

const Footer = ({ darkText, darkLogo }) => {
  // function googleTranslateElementInit() {
  //   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  // }

  /* <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> */

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="mnla-logo-div">
          {darkLogo ? (
            <img src={DarkLogo} alt="MNLA logo" />
          ) : (
            <img src={Logo} alt="MNLA Logo" />
          )}
          <p className={`intuivite-paragraph ${darkText && 'dark-text'}`}>
            Intuitive Interface, Lightning speed transactions, Advanced Security
            and 24H support.
          </p>
          <p className={`mnla-technologies ${darkText && 'dark-text'}`}>© Manilla Tecgnologies 2023</p>
        </div>

        <div className="social-media-div">
          <div className="icons-div">
            <span className="imgs">
            <img className="icons-img" src={facebook} alt="Facebook's logo" />
            </span>

            <span className="imgs">
            <img className="icons-img" src={linkedin} alt="linkedin's logo" />
            </span>

            <span className="imgs">
            <img className="icons-img" src={twitter} alt="Twitter's logo" />
            </span>

            <span className="imgs">
            <img className="icons-img" src={instagram} alt="Instagram's logo" />
            </span>

            <span className="imgs">
            <img className="icons-img" src={telegram} alt="Telegram's logo" />
            </span>
            
          </div>
          <div className="translation">
            <div className="tranlation-text">English</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
