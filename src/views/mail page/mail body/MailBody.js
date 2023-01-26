import React from "react";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import email from "../../../assets/images/forgot password illustration (1).svg";

import "../../login/login body/login-body.css";

const MailBody = () => {
  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form">
          <p className="mail-text">Check Your Email</p>
          <p className="check-mail-text">We have sent an email with password reset information to n****e@e***e.com.</p>
          
          <div className="buttons-div">
          <p>Didn’t receive the email? Check spam or promotion folder</p>
          <button className="continue">Resend Email</button>
          <button className="continue back-to-login">Back to Login</button>
          </div>
        </div>
        <div className="login-img ">
          <img src={email} alt="login" />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default MailBody;
