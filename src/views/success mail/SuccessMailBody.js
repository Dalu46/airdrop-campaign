import React, { useEffect, useRef } from "react";
import fill1 from "../../assets/images/Fill 1 (1).svg";
import fill2 from "../../assets/images/Fill 2.svg";
import email from "../../assets/images/forgot password illustration (1).svg";
import blueArrow from "../../assets/icons/blue-arrow.svg"

import "../login/login body/login-body.css";

const SuccessMailBody = () => {

  const inputRef = useRef(null);

  const otpMinutes = "00";
  const otpSeconds = "34";

  // useEffect(() => {
  //   // focus the first input element on page load
  //   inputRef.current.focus();
  // }, [])

  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form reset-forgotten-password success-mail-div">
          <p className="mail-text">Check Your Email</p>
          <p className="check-mail-text">
            We have sent an email to
            n****e@e***e.com.
          </p>

          <div className="buttons-div">
            <p>Didn’t receive the email? Check spam or promotion folder</p>
            <button className="continue">Resend Email</button>
            <button className="continue back-to-login">Back to Login</button>
          </div>
        </div>


        {/* =================== mobile view ==================== */}

        <div className="reset-forgotten-password-mobile success-mail-mobile">
          <p className="mail-text">Check your mail</p>
          <p className="sent-otp-text">
          We have sent an email to
            n****e@e***e.com.
          </p>

          {/* <div className="fill-otp-wrapper">
            <input ref={inputRef} type="number" required="required" max="1" />
            <input type="number" required="required" />
            <input type="number" required="required" />
            <input type="number" required="required" />
          </div> */}

          <p className="resend-otp-text-wrapper resend-success-mail">
            Didn’t get Mail? <span className="resend-text">Resend</span>
          </p>

          <span className="login-success-span">
            <p>Back to Login</p>
            <img src={blueArrow} alt="login" />
          </span>
        </div>

        {/* =================== finished ======================= */}

        <div className="login-img reset-forgotten-password-img">
          <img src={email} alt="login" />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default SuccessMailBody;

