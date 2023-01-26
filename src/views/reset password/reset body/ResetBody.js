import React from "react";
import SuccessSvg from "../../../components/success svg/SuccessSvg";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import successIcon from "../../../assets/images/succes-icon.svg";

const ResetBody = () => {
  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form">
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
        <div className="login-img ">
          <SuccessSvg />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default ResetBody;
