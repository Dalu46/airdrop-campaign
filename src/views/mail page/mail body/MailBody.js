import React, { useEffect, useRef } from "react";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import email from "../../../assets/images/forgot password illustration (1).svg";
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import "../../login/login body/login-body.css";

const MailBody = () => {

  const codeRef = useRef();
  const codeMobileRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const verifyEmail = ()=>{
    console.log(location.state.msg)
     const data = {
       email: location.state.msg,
       code: codeRef.current.value
    }
    axios.post('https://manilla.herokuapp.com/api/verify-account', data)
    .then((response) => {
      console.log(response)
      alert('Your Email has successfully been verified, Login.');
      navigate('/login')
    })
    .catch(function (error) {
      console.log(error);
      alert('Error verifying mail, please try again');
    });
  }

  const verifyEmailMobile = ()=>{
    console.log(location.state.msg)
     const data = {
       email: location.state.msg,
       code: codeMobileRef.current.value
    }
    axios.post('https://manilla.herokuapp.com/api/verify-account', data)
    .then((response) => {
      console.log(response)
      alert('Your Email has successfully been verified, Login.');
      navigate('/login')
    })
    .catch(function (error) {
      console.log(error);
      alert('Error verifying mail, please try again');
    });
  }

  const resendVerificationCode = ()=>{
    const data = {
      email: location.state.msg
   }
    axios.post('http://localhost:4000/api/send-verification-code', data)
    .then((response) => {
      console.log(response)
      alert('code sent again');
    })
    .catch(function (error) {
      console.log(error);
      alert('error')
    });
  }

  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form reset-forgotten-password">
          <p className="mail-text">Check Your Email</p>
          <p className="check-mail-text">
            We have sent an email verification code to
            {location.state.msg} 
          </p>

          <div className="buttons-div">
            <p>Didn’t receive the email? Check spam or promotion folder</p>
            <input ref={codeRef} className="forgot-input-email" placeholder="Type OTP" alt="otp" />
            <button onClick={verifyEmail} className="continue">Verify Email</button>
            <span className="resend-text"> <button onClick={resendVerificationCode} className="continue">Resend</button></span>
            {/* <button className="continue back-to-login">Back to Login</button> */}
          </div>
        </div>

        {/* =================== mobile view ==================== */}

        <div className="reset-forgotten-password-mobile">
          <p className="mail-text">Check your mail</p>
          <p className="sent-otp-text">
            We just sent an OTP to your registered email adress
          </p>

          <input ref={codeMobileRef} className="forgot-input-email" placeholder="Type OTP" alt="otp" />


          <p className="resend-otp-text-wrapper">
            Didn’t get code? <span className="resend-text"> <button onClick={resendVerificationCode} className="continue">Resend</button></span>
          </p>

          <button onClick={verifyEmailMobile} className="continue">Verify Email</button>
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

export default MailBody;
