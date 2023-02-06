import React from "react";
import forgot from "../../../assets/images/forgot password illustration (2).svg";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import arrow from "../../../assets/icons/arrow.svg";

const ForgotBody = () => {
  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form forgot-form">
          <p className="mail-text">Forgot Password?</p>
          <p className="check-mail-text">
            Don’t worry, it happens to the best of us
          </p>

          <div className="buttons-div">
            <p>Kindly input the email address you registered with.</p>
            <input type="email" className="forgot-input-email" />
            <button className="continue">Continue</button>
          </div>
        </div>

        <div className="forgot-password-mobile">
          <div className="forgot-mail-box">
          <p className="mail-text">Forgot Password?</p>
          <p className="dont-worry-text">Don’t worry, it happens to the best of us.</p>
          </div>

          <div className="inputBox">
            <input type="text" required="reauired" placeholder="Enter email" />
            <span>Active</span>
          </div>

          <div className="try-another-div">
            <p className="try-another-text">Try another way</p>
            <span>
              <p>Continue</p>
              <img src={arrow} alt="continue" />
            </span>
          </div>
        </div>

        <div className="login-img forgot-img">
          <img src={forgot} alt="login" />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default ForgotBody;
