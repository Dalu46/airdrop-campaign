import React from "react";
import shape from "../../../assets/images/Shape.svg";

import './social-media.css';

const SocialMedia = ({ socialMediaIcon, socialMediaName }) => {
  const verfied = "Not verrified";
  return (
    <div className="social-media">
      <div className="verification-div">
        <img
          className="social-media-image"
          src={socialMediaIcon}
          alt="verify with twitter"
        />
        <span>
          <p>Status: {verfied}</p>
          <img src={shape} alt="your account has been verifed" />
        </span>
      </div>

      <div className="social-media-name-div">
        <p className="social-media-name">{socialMediaName}</p>
        <p className="follow-social-media">
          Make sure you follow @Manillafinance on {socialMediaName} before you input your
          username
        </p>
      </div>

      <div className="connect-buttons-div">
        <input type="text" className="user-name-input" placeholder={`Input ${socialMediaName} username`}/>
        <button>Verify</button>
      </div>
    </div>
  );
};

export default SocialMedia;
