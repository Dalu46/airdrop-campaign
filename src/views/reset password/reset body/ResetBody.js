import React from "react";
import SuccessSvg from "../../../components/success svg/SuccessSvg";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import successIcon from "../../../assets/images/succes-icon.svg";
import blueArrow from "../../../assets/icons/blue-arrow.svg";

const ResetBody = () => {
  return (
    <div className="login-div">
      <div className="login-wrapper success-wraper">
        <div className="login-form successful-reset">
          <div className="buttons-div">
            <img
              className="success-logo"
              src={successIcon}
              alt="password reset successfull"
            />
            <p className="reset-successfull">Password reset successfully</p>
            <button className="continue success-continue">Login</button>
          </div>
        </div>

        <div className="successful-mobile-div">
          <p className="mail-text">Reset Successful</p>
          <p className="login-to-acc-text">You can now log into your account</p>

          <span className="login-success-span">
            <p>Login Now</p>
            <img src={blueArrow} alt="login" />
          </span>
        </div>

        <div className="login-img success-img">
          <SuccessSvg />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default ResetBody;
