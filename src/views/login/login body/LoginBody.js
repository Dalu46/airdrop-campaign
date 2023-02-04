import React from "react";
import login from "../../../assets/images/Artwork/Login.svg";
import facebook from "../../../assets/icons/icons8-facebook-f (1).svg";
import twitter from "../../../assets/icons/icons8-twitter (1).svg";
import google from "../../../assets/icons/icons8-google.svg";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";

import "./login-body.css";
import { Link } from "react-router-dom";

const LoginBody = () => {
  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form">
          <form>
            <p className="login-text">Login To Your Account</p>
            <div className="login-icons">
              <span className="facebook">
                <img src={facebook} alt="facebook logo" />
                <p className="icon-text">FACEBOOK</p>
              </span>
              <span className="twitter">
                <img src={twitter} alt="twitter logo" />
                <p className="icon-text">TWITTER</p>
              </span>
              <span className="google">
                <img src={google} alt="google logo" />
                <p className="icon-text">GOOGLE</p>
              </span>
            </div>

            <div className="email-div">
              <hr />
              <p>Or login with email</p>
              <hr />
            </div>

            <div className="input-div">
              <input
                type="text"
                id="name"
                name="name"
                className="name"
                placeholder="Name"
              />
              <input
                type="password"
                name="password"
                className="password"
                placeholder="Password"
              />
            </div>

            <div className="checkbox-div">
              <span>
                <input type="checkbox" id="checkbox" className="checkbox" />
                <p>Remember</p>
              </span>
              <Link to="/forgotpassword">{<p className="forgot-password">Forgot Password?</p>}</Link>
            </div>

            <button className="continue">CONTINUE</button>
          </form>
        </div>

        <div className="login-img ">
          <img src={login} alt="login" />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default LoginBody;
