import React from "react";
import {useState, useRef, useEffect} from "react";
import facebook from "../../../assets/icons/icons8-facebook-f (1).svg";
import twitter from "../../../assets/icons/icons8-twitter (1).svg";
import google from "../../../assets/icons/icons8-google.svg";
import login from "../../../assets/images/Artwork 2/Register.svg";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import axios from 'axios';
import "../../login/login body/login-body.css";
import { useNavigate } from "react-router-dom";


const AccountBody = () => {
  const navigate = useNavigate();
  const formData = useRef();
  const onSubmit = (event) => {

    event.preventDefault();

    const {name, email, wallet, referral,password,confirmPassword} = formData.current;

    const data = {
      name: name.value,
      email: email.value,
      walletAddress: wallet.value,
      referredBy: referral.value,
      password: password.value
    }

    console.log(data)

    axios.post('http://localhost:4000/api/register', data)
    .then((response) => {
      console.log(response)
      response.data.msg == "Email verification code has successfully been sent"?
      navigate('/checkmail', { state: {msg: response.data.email} }): alert('error')
    })
    .catch(function (error) {
      console.log(error);
    });
 }
  return (
    <div className="login-div">
      <div className="login-wrapper create-account-wrapper">
        <div className="login-form create-account-form">
          <form ref={formData}>
            <p className="login-text">Create Your Account</p>
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

            <div className="email-div register-email-div">
              <hr className="register-hr" />
              <p className="register-with-text">Or register with email</p>
              <hr className="register-hr" />
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
                type="email"
                name="email"
                className="password"
                placeholder="Email"
              />
               <input
                type="text"
                name="wallet"
                className="password"
                placeholder="ERC-20 Wallet Address"
              />
               <input
                type="text"
                name="referral"
                className="password"
                placeholder="Referral Code"
              />
            </div>

            <div className="reset-password">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="password password-reset"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat Password"
                className="password-reset reset-password-two name"
              />
            </div>

            <div className="checkbox-div">
              <span className="checbox-div-span checkbbox-span-register">
                <input type="checkbox" id="checkbox" className="checkbox register-checkbox" />
                <p className="i-agree-text">
                  I have read and accept the Terms of Service & Privacy Policy *
                </p>
              </span>
              <button type="submit" onClick={onSubmit} className="continue-btn continue-btn-register">CONTINUE</button>
            </div>
          </form>
        </div>

        <div className="login-img create-account-img">
          <img src={login} alt="login"  />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default AccountBody;
