import React, {useEffect} from "react";
import image from "../../../assets/images/Image.png";
import locationLogo from "../../../assets/icons/map-pin.svg";
import illustration from "../../../assets/images/Illustration (1).svg";
import SocialMedia from "../social media/SocialMedia";
import twitter from '../../../assets/icons/icons8-twitter (1).svg';
import telegram from '../../../assets/icons/icons8-telegram-app.svg';
import instagram from '../../../assets/icons/icons8-instagram (1).svg';
import facebook from '../../../assets/icons/icons8-facebook-f (1).svg';
import ProfileBox from "../profile box/ProfileBox";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import './dash-board-body.css';

const DashBoardBody = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.userInfo;
  console.log(user);

  return (
    <div className="dash-board-body">
      <div className="user-div">
        <div className="user-profile">
          <p className="user-name-text">Hi {user.name},</p>
          <p className="welcome-text">Were glad to have you here</p>

          <div className="user-image-div">

            <div className="user-profile-picture-div">
              <p className="user-name">{user.email}</p>
            
            </div>
          </div>
          <hr className="user-hr" />
        </div>

        <div className="refferals-div">
          <img src={illustration} alt="refferals" />
          <p className="refferals-header">REFFERALS</p>

          <div className="refferals-code-div">
            <p className="refferals-num">REFERRALS : {user.referrals}</p>
            <p className="refferals-num">REFFERALS CODE : {user.referralCode}</p>
          </div>

          <div className="copy-btn-div">
          <button className="copy-btn">Copy referral Code</button>
          </div>

        </div>
      </div>

      <div className="connect-with-socials">
        <div className=" connect-text-box">
          <p className="connect-text">Connect with our Socials</p>
          <p className="follow-us-text">Verify your account by following us on social media</p>
        </div>
        <div className="connect-div">
          <div className="social-media-first-block">

          {user.twitterVerified == false? <SocialMedia socialMediaName={'Twitter'} socialMediaIcon={twitter} userInfo={user} />:<div></div>}
            
           { user.telegramVerified === false?<SocialMedia socialMediaName={'Telegram'} socialMediaIcon={telegram} userInfo={user} />: <div></div>}
          {/* </div>

          <div className="social-media-second-block"> */}
           { user.instagramVerified === false?<SocialMedia socialMediaName={'Instagram'} socialMediaIcon={instagram} userInfo={user}/>:<div></div>}
          </div>
        </div>
        <hr className="social-hr"/>

        <div className="connect-div-two">
          <ProfileBox userInfo={user} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardBody;
