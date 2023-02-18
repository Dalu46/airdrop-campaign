import React, { useEffect, useRef } from "react";
import fill1 from "../../../assets/images/Fill 1 (1).svg";
import fill2 from "../../../assets/images/Fill 2.svg";
import forgotPasswordTwo from "../../../assets/images/forgot password illustration.svg";
import axios from 'axios';
import "../../login/login body/login-body.css";
import { useParams} from "react-router-dom";

const ResetForgotenBody = () => {
  const {userId, token} = useParams();
  const passwordRef = useRef();
  const cpasswordRef = useRef();

  const mpasswordRef = useRef();
  const mcpasswordRef = useRef();

  const resetPassword= ()=>{
   if (cpasswordRef.current.value || mcpasswordRef.current.value == passwordRef.current.value || mpasswordRef.current.value){
    const data = {
      userId: userId,
      token:token,
      password: passwordRef.current.value
    }

    axios.post('http://localhost:4000/api/reset-password', data)
    .then((response) => {
      console.log(response)
    alert('mail sent again');
    })
    .catch(function (error) {
      console.log(error);
      alert('error')
    });
   }
   else {
    alert('passwords do not match')
   }
    
  }
  return (
    <div className="login-div">
      <div className="login-wrapper">
        <div className="login-form reset-forgotten-password">
          <p className="mail-text">Reset Password</p>
          <p className="check-mail-text">
            Choose a new password for your account
          </p>

          <div className="buttons-div buttons-div-two">
            <div className="reset-password-div">
              <div className="reset-password-input-one">
                <input
                ref={passwordRef}
                  className="name"
                  type="password"
                  placeholder="Your new password"
                />
              </div>
              <div className="reset-password-input-two">
                <input
                ref={cpasswordRef}
                  className="name"
                  type="password"
                  placeholder="Confirm your new password"
                />
              </div>
            </div>

            <button onClick={resetPassword} className="continue reset-button-continue">Reset Password</button>
            <button className="continue back-to-login">Back to Login</button>
          </div>
        </div>

        {/* for mobile view */}

        <div className="reset-forgotten-password-mobile">
          <p className="mail-text">Reset your password</p>
          <p className="dont-worry-text">Here's a tip: Use a combination of Numbers, Uppercase, Lowercase and Special characters</p>

          <div className="inputBox">
            <input ref={mpasswordRef} type="text" required="reauired" placeholder="Enter new password" />
            <span>New password</span>
          </div>
          <div className="inputBox">
            <input ref={mcpasswordRef} type="text" required="reauired" placeholder="Enter new password" />
            <span>Confirm New password</span>
          </div>
            <button onClick={resetPassword} className="reset-password-btn">Reset Password</button>

        </div>

        {/* mobile view ends here  */}

        <div className="login-img reset-forgotten-password-img">
          <img src={forgotPasswordTwo} alt="login" />
        </div>

        <img className="fill fill-one" src={fill1} alt="fill" />
        <img className="fill fill-two" src={fill2} alt="fill" />
      </div>
    </div>
  );
};

export default ResetForgotenBody;
