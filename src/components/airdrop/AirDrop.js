import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./airdrop.css";

const AirDrop = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('May 24, 2023 00:00:00').getTime();
    console.log()

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current)
      } else {
        // update timer 
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds)
      }
    })
    
  }

  // once the component mounts
  useEffect(() => {
    startTimer();
  }, [])

  // const days = "07";
  // const hours = 20;
  // const minutes = 30;
  // const seconds = 45;

  return (
    <div className="main-air-drop-container">
      <div className="air-drop-box">
        <div className="air-drop-text">
          <p className="air-text">Airdrop Claim Portal Opens In</p>
          <div className="count-down">
            <div className="date-box">
              <p className="date-box-num">{timerDays}</p>
              <p className="day">days</p>
            </div>

            <span>
              <hr />
              <hr />
            </span>

            <div className="date-box">
              <p className="date-box-num">{timerHours}</p>
              <p className="day">hours</p>
            </div>

            <span>
              <hr />
              <hr />
            </span>

            <div className="date-box">
              <p className="date-box-num">{timerMinutes}</p>
              <p className="day">minutes</p>
            </div>

            <span>
              <hr />
              <hr />
            </span>

            <div className="date-box">
              <p className="date-box-num">{timerSeconds}</p>
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
