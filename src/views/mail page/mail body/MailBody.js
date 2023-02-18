import React, { useEffect, useRef } from "react";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import email from "../../../assets/images/forgot password illustration (1).svg";

import "../../login/login body/login-body.css";

const MailBody = () => {


  const inputRef = useRef(null);
  const otpRef = useRef(null)
  const verifyBtn = useRef(null)

  const otpMinutes = "00";
  const otpSeconds = "34";

  useEffect(() => {
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
  }, [])

  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form reset-forgotten-password">
          <p className="mail-text">Check Your Email</p>
          <p className="check-mail-text">
            We have sent an email with password reset information to
            n****e@e***e.com. <span className="resend-text">Resend?</span>
          </p>

          <div className="buttons-div">
            <p>Didn’t receive the email? Check spam or promotion folder</p>
            <input className="forgot-input-email" placeholder="Type OTP" alt="otp" />
            <button className="continue">Back to Login</button>
            {/* <button className="continue back-to-login">Back to Login</button> */}
          </div>
        </div>


        {/* =================== mobile view ==================== */}

        <div className="reset-forgotten-password-mobile">
          <p className="mail-text">Check your mail</p>
          <p className="sent-otp-text">
            We just sent an OTP to your registered email adress
          </p>

          <div ref={otpRef} className="fill-otp-wrapper">
            <input ref={inputRef} type="number" required="required" />
            <input type="number" disabled required="required" />
            <input type="number" disabled required="required" />
            <input type="number" disabled required="required" />
          </div>

          <p className="otp-timer">
            <span>{otpMinutes}</span>
            <span>:</span>
            <span>{otpSeconds}</span>
          </p>

          <p className="resend-otp-text-wrapper">
            Didn’t get code? <span className="resend-text">Resend</span>
          </p>

          <button ref={verifyBtn} className="reset-password-btn">Verify OTP</button>
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
