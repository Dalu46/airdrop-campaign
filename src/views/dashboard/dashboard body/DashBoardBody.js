import React from "react";
import image from "../../../assets/images/Image.png";
import locationLogo from "../../../assets/icons/map-pin.svg";
import illustration from "../../../assets/images/Illustration (1).svg";
import SocialMedia from "../social media/SocialMedia";
import twitter from '../../../assets/icons/icons8-twitter (1).svg';
import telegram from '../../../assets/icons/icons8-telegram-app.svg';
import instagram from '../../../assets/icons/icons8-instagram (1).svg';
import facebook from '../../../assets/icons/icons8-facebook-f (1).svg';

const DashBoardBody = () => {
  const name = "Usman";
  const userName = "Usman Danbaba";
  const location = "Lagos, Nigeria";

  const numberOfRefferals = 0;
  const refferalCode = "VD55G3";
  return (
    <div className="dash-board-body">
      <div className="user-div">
        <div className="user-profile">
          <p className="user-name-text">Hi {name},</p>
          <p className="welcome-text">Were glad to have you here</p>

          <div className="user-image-div">
            <img src={image} alt="user face" />

            <div className="user-profile-picture-div">
              <p>{userName}</p>
              <p>Change picture</p>
            </div>
          </div>
          <hr className="user-hr" />
          <span className="location-span">
            <img src={locationLogo} alt="location" />
            <p>{location}</p>
          </span>
        </div>

        <div className="refferals-div">
          <img src={illustration} alt="refferals" />
          <p className="refferals-header">REFFERALS</p>

          <div className="refferals-code-div">
            <p className="refferals-num">REFERRALS : {numberOfRefferals}</p>
            <p className="refferals-code">REFFERALS CODE : {refferalCode}</p>
          </div>

          <button>Copy referral link</button>
        </div>
      </div>

      <div className="connect-with-socials">
        <div className="connect-div">
          <div className="social-media-first-block">
            <SocialMedia socialMediaName={'twitter'} socialMediaIcon={twitter} />
            <SocialMedia socialMediaName={'telegram'} socialMediaIcon={telegram} />
          </div>

          <div className="social-media-second-block">
            <SocialMedia socialMediaName={'instagram'} socialMediaIcon={instagram}/>
            <SocialMedia socialMediaName={'facebook'} socialMediaIcon={facebook}/>
          </div>
        </div>

        <div className="connect-div-two"></div>
      </div>
    </div>
  );
};

export default DashBoardBody;
