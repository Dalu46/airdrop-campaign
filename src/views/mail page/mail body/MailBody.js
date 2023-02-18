import React, { useEffect, useRef } from "react";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import email from "../../../assets/images/forgot password illustration (1).svg";
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import "../../login/login body/login-body.css";

const MailBody = () => {


  const inputRef = useRef(null);
<<<<<<< HEAD
  const codeRef = useRef();
  const codeMobileRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
=======
  const otpRef = useRef(null)
  const verifyBtn = useRef(null)

>>>>>>> ef2ff640f80b16b4e7f012ef38dd6f126f8bb4ed
  const otpMinutes = "00";
  const otpSeconds = "34";

  const verifyEmail = ()=>{
    console.log(location.state.msg)
     const data = {
       email: location.state.msg,
       code: codeRef.current.value || codeMobileRef.current.value
    }
    axios.post('http://localhost:4000/api/verify-account', data)
    .then((response) => {
      console.log(response)
      alert('email verified');
      navigate('/login')
    })
    .catch(function (error) {
      console.log(error);
      alert('error')
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


  useEffect(() => {
<<<<<<< HEAD
    // focus the first input element on page load
  //  inputRef.current.focus();
=======
    //===================== FOR RESET FORGOTTEN PASSWORD MOBILE =================
    // focus the first input element on page load (for otp)
    inputRef.current.focus();

    // make the focus iterate over the input boxes for otp
    const parentRef = otpRef.current;
    const inputs = parentRef.childNodes;
    const verifyButton = verifyBtn.current;

    inputs.forEach((input, index1) => {
      input.addEventListener('keyup', (e) => {
        const currentInput = input;
        let nextInput = input.nextElementSibling;
        let prevInput = input.previousElementSibling;

        if(currentInput.value.length > 1) {
          currentInput.value = '';
          return;
        }

        if(nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
          nextInput.removeAttribute('disabled');
          nextInput.focus()
        }

        //if the back space key is pressed
        if(e.key === 'Backspace') {
          inputs.forEach((input, index2) => {
            if(index1 <= index2 && prevInput) {
              input.setAttribute('disabled', true);
              currentInput.value = '';
              prevInput.focus()
            }
          })
        }

        // if the forth input is not empty, and has not been disabled, then add active to the active class to the verify button
        if(inputs[3].value !== '' && !inputs[3].disabled) {
          verifyButton.classList.add('active');
          return;
        }
        verifyButton.classList.remove('active');

      });
    })



    // console.log(inputs);
>>>>>>> ef2ff640f80b16b4e7f012ef38dd6f126f8bb4ed
  }, [])

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
<<<<<<< HEAD
          <input ref={codeMobileRef} className="forgot-input-email" placeholder="Type OTP" alt="otp" />
      
          {/* <div className="fill-otp-wrapper">
            <input ref={inputRef} type="number" required="required" max="1" />
            <input type="number" required="required" />
            <input type="number" required="required" />
            <input type="number" required="required" />
          </div> */}
=======

          <div ref={otpRef} className="fill-otp-wrapper">
            <input ref={inputRef} type="number" required="required" />
            <input type="number" disabled required="required" />
            <input type="number" disabled required="required" />
            <input type="number" disabled required="required" />
          </div>
>>>>>>> ef2ff640f80b16b4e7f012ef38dd6f126f8bb4ed

          <p className="otp-timer">
            <span>{otpMinutes}</span>
            <span>:</span>
            <span>{otpSeconds}</span>
          </p>

          <p className="resend-otp-text-wrapper">
            Didn’t get code? <span className="resend-text"> <button onClick={resendVerificationCode} className="continue">Resend</button></span>
          </p>

<<<<<<< HEAD
          <button onClick={verifyEmail} className="reset-password-btn">Verify Code</button>
=======
          <button ref={verifyBtn} className="reset-password-btn">Verify OTP</button>
>>>>>>> ef2ff640f80b16b4e7f012ef38dd6f126f8bb4ed
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
