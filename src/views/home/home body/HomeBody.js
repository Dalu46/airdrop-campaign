import React, { useState } from "react";
import Crypto from "./Crypto";
import Login from "../../../components/login/LoginBtn";
import Register from "../../../components/register/RegisterBtn";
import about from "../../../assets/icons/about-img 1.svg";
import cancleBtn from "../../../assets/icons/x.svg";

import "./body.css";
import { Link } from "react-router-dom";

const HomeBody = () => {
  const [modal, setModal] = useState(false);

  const toggleInstructionModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className="home-body">
      <Crypto toggleModal={toggleInstructionModal} />
      <div className="img-div">
        <img src={about} alt="about img" />
      </div>

    {modal && (
      <div  className="overlay">
        <div className={`instruction-popup ${!modal ? 'fade-out' : 'null'}`}>
          <span>
            <p className="instruction-head-text">
              AIRDROP ELIGIBILIGY INSTRUCTION
            </p>
            <img className="cancel-btn" alt="cancle" src={cancleBtn} onClick={toggleInstructionModal} />
          </span>
          <hr className="intruction-hr" />

          <p className="instruction-text">Create a free account</p>
          <p className="instruction-text">Login to the account</p>
          <p className="instruction-text">
            After login, follow all the available handles
          </p>
          <p className="instruction-text">After following, click on Submit</p>

          <hr className="instruction-hr" />

          <div className="instruction-login-div">
            <Link to='/login'>{<Login instructions={true} />}</Link>
            <Link to='/register'>{<Register />}</Link> 
          </div>
        </div>
      </div>
    )}

    </div>
  );
};

export default HomeBody;
