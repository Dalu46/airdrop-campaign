import React from "react";
import { Link } from "react-router-dom";
import "./airdrop.css";

const AirDrop = () => {
  const days = "07";
  const hours = 20;
  const minutes = 30;
  const seconds = 45;

  return (
    <div className="main-air-drop-container">
      <div className="air-drop-box">
        <div className="air-drop-text">
          <p className="air-text">Airdrop Claim Portal Opens In</p>
          <div className="count-down">
            <div className="date-box">
              <p className="date-box-num">{days}</p>
              <p className="day">days</p>
            </div>

            <span>
              <hr />
              <hr />
            </span>

            <div className="date-box">
              <p className="date-box-num">{hours}</p>
              <p className="day">hours</p>
            </div>

            <span>
              <hr />
              <hr />
            </span>

            <div className="date-box">
              <p className="date-box-num">{minutes}</p>
              <p className="day">minutes</p>
            </div>

            <span>
              <hr />
              <hr />
            </span>

            <div className="date-box">
              <p className="date-box-num">{seconds}</p>
              <p className="day">seconds</p>
            </div>
          </div>
          <Link to="/register">
            <button className="verify-btn">REGISTER & GET VERIFIED</button>
          </Link>
        </div>
        <div className="amount-div">
          <p className="smnla-text">
            1 SMNLA <span>= $0.1</span>
          </p>
          <div className="static-line-div">
            <span className="static-line-circle" />
            <hr className="static-line" />
            <span className="static-line-circle two" />
          </div>
          <p className="smnla-text">TOKENS AVAILABLE</p>
          <p className="mnla">
            MNLA <span>2.5M</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AirDrop;
