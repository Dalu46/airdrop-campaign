import React from "react";
import {useState, useRef, useEffect} from "react";
import login from "../../../assets/images/Artwork/Login.svg";
import facebook from "../../../assets/icons/icons8-facebook-f (1).svg";
import twitter from "../../../assets/icons/icons8-twitter (1).svg";
import google from "../../../assets/icons/icons8-google.svg";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import axios from 'axios';
import "./login-body.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginBody = () => {
  const navigate = useNavigate();
  const formData = useRef();
  
  const onSubmit = (event) => {

    event.preventDefault();

    const {email, password} = formData.current;

    if (email.value === "" || password.value === "") {
      alert("Missing form input parameters");
    }
    else {
      const data = {
        email: email.value,
        password: password.value
      }
      axios.post('https://manilla.herokuapp.com/api/login', data)
      .then((response) => {
        console.log(response)
        const data = response.data;
        const token = data.token;
        if (!token) {
            alert('Unable to login. Please try after some time.');
            return;
        }
        localStorage.clear();
        localStorage.setItem('user-token', token);
        setTimeout(() => {
          navigate('/dashboard',{state:{userInfo: data.user}})
        }, 500);
       
      })
      .catch(function (error) {
        console.log(error);
      });
    }


 }
  return (
    <div className="login-div" >
      <div className="login-wrapper">
        <div className="login-form">
          <form ref={formData}>
            <p className="login-text">Login To Your Account</p>
            

            <div className="email-div">
              <hr />
              <p>login with email</p>
              <hr />
            </div>

            <div className="input-div">
              <input
                type="email"
                id="email"
                name="email"
                className="name"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                className="password"
                placeholder="Password"
              />
            </div>

            <div className="checkbox-div">
              <Link to="/forgotpassword">{<p className="forgot-password">Forgot Password?</p>}</Link>
            </div>

            <button type="submit" onClick={onSubmit} className="continue">LOGIN</button>
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
