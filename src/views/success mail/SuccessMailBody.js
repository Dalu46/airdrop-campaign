import React, { useEffect, useRef } from "react";
import fill1 from "../../assets/images/Fill 1 (1).svg";
import fill2 from "../../assets/images/Fill 2.svg";
import email from "../../assets/images/forgot password illustration (1).svg";
import blueArrow from "../../assets/icons/blue-arrow.svg"
import { useLocation } from "react-router-dom";
import "../login/login body/login-body.css";
import axios from 'axios';
const SuccessMailBody = () => {
  const location = useLocation();
  const inputRef = useRef(null);
  const otpMinutes = "00";
  const otpSeconds = "34";

 // console.log(state)
  console.log(location.state)

  const resendMail= ()=>{
    const data ={
      email: location.state.msg
    }
    axios.post('https://manilla.herokuapp.com/api/send-password-reset-link', data)
    .then((response) => {
      console.log(response)
    alert('mail sent again');
    })
    .catch(function (error) {
      console.log(error);
      alert('error')
    });
  }
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
            We have sent an email to {location.state.msg}
          </p>

          <div className="buttons-div">
            <p>Didn’t receive the email? Check spam or promotion folder</p>
            <button onClick={resendMail} className="continue">Resend Email</button>
          </div>
        </div>

        {/* =================== mobile view ==================== */}

        <div className="reset-forgotten-password-mobile success-mail-mobile">
          <p className="mail-text">Check your mail</p>
          <p className="sent-otp-text">
          We have sent an email to
          {location.state.msg}
          </p>

          {/* <div className="fill-otp-wrapper">
            <input ref={inputRef} type="number" required="required" max="1" />
            <input type="number" required="required" />
            <input type="number" required="required" />
            <input type="number" required="required" />
          </div> */}

          <p className="resend-otp-text-wrapper resend-success-mail">
            Didn’t get Mail? <span className="resend-text"> <button onClick={resendMail} className="continue">Resend Email</button></span>
          </p>

         
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
