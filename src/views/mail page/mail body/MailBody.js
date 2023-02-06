import React, { useEffect, useRef } from "react";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import email from "../../../assets/images/forgot password illustration (1).svg";

import "../../login/login body/login-body.css";

const MailBody = () => {

  const inputRef = useRef(null);

  const otpMinutes = "00";
  const otpSeconds = "34";

  useEffect(() => {
    // focus the first input element on page load
    inputRef.current.focus();
  }, [])

  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form reset-forgotten-password">
          <p className="mail-text">Check Your Email</p>
          <p className="check-mail-text">
            We have sent an email with password reset information to
            n****e@e***e.com.
          </p>

          <div className="buttons-div">
            <p>Didn’t receive the email? Check spam or promotion folder</p>
            <button className="continue">Resend Email</button>
            <button className="continue back-to-login">Back to Login</button>
          </div>
        </div>

        <div className="reset-forgotten-password-mobile">
          <p className="mail-text">Check your mail</p>
          <p className="sent-otp-text">
            We just sent an OTP to your registered email adress
          </p>

          <div className="fill-otp-wrapper">
            <input ref={inputRef} type="number" required="required" max="1" />
            <input type="number" required="required" />
            <input type="number" required="required" />
            <input type="number" required="required" />
          </div>

          <p className="otp-timer">
            <span>{otpMinutes}</span>
            <span>:</span>
            <span>{otpSeconds}</span>
          </p>

          <p className="resend-otp-text-wrapper">
            Didn’t get code? <span className="resend-text">Resend</span>
          </p>

          <button className="reset-password-btn">Verify OTP</button>
        </div>

        <div className="login-img reset-forgotten-password-img">
          <img src={email} alt="login" />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default MailBody;
