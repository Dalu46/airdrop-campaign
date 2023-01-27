import React from "react";
import sheild from "../../../assets/images/shield 1.svg";
import arrow from '../../../assets/icons/Vector.svg';

import './profile-box.css';

const ProfileBox = () => {
  const fullName = "Usman Danbab";
  const emailAddress = "Usmandanbab75@gmail.com";
  const phone = "08104856200";
  const country = "Nigeria";
  const eligibility = 'NOT ELIGIBLE FOR AIRDROP';
  const numberOfTasksDone = '1 out of 4 tasks done';

  return (
    <div className="profile-box-container">
      <div className="profile">
        <div className="profile-div">
          <p className="connect-text">Profile</p>
          <p className="follow-us-text">See basic information about your account</p>
        </div>

        <div className="name-div-wrapper">
          <div className="name-div">
            <p>Full name</p>
            <button className="change-name">Change name</button>
          </div>
          <div className="user-name">
            <input
              className="full-name"
              type="text"
              // disabled="true"
              placeholder={`${fullName}`}
            />
            <hr className="userName-hr" />
          </div>

          <div className="name-div">
            <p className="full-name">Email Address</p>
            <button className="change-name">Change email</button>
          </div>
          <div className="user-name">
            <input
              className="full-name"
              type="email"
              placeholder={`${emailAddress}`}
            />
            <hr className="userName-hr" />
          </div>

          <div className="name-div">
            <p className="full-name">Password</p>
            <button className="change-name" type="password">
              Change password
            </button>
          </div>
          <div className="user-name">
            <input className="full-name" placeholder={`${emailAddress}`} />
            <hr className="userName-hr" />
          </div>

          <div className="name-div">
            <p className="full-name">Phone</p>
            <button className="change-name" type="number">
              Update
            </button>
          </div>
          <div className="user-name">
            <input className="full-name" placeholder={`${phone}`} />
            <hr className="userName-hr" />

            <div className="name-div">
              <p className="full-name">Country</p>
              <button className="change-name" type="number">
                Change
              </button>
            </div>
            <div className="user-name">
              <input className="full-name" placeholder={`${country}`} />
              <hr className="userName-hr" />
            </div>

            <div className="secure-account">
              <span className="shield-box">
                <img
                  className="shield"
                  src={sheild}
                  alt="protect your account"
                />
              <p>Secure Your Account</p>
              </span>
              <div className="enable-authentication-div">
                <p className="enable-authenctication-text">
                  Two-factor authentication adds an extra layer security to your
                  account. To login, in addition you’ll need to provide a 6
                  digit code. learn more
                </p>
                <button className="enable-button">Enable</button>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="overview">
          <div className="overview-div">
            <p className="connect-text">Overview</p>
            <p className="follow-us-text">Manilla Airdrop eligibility and task completion</p>
          </div>

          <div className="name-div-wrapper">
            <div className="eligibility-container">
              <div className="eligibility-status-box">
                <p className="eligibility-status-text">ELIGIBILITY STATUS</p>
                <img src={arrow} alt="up arrow" className="arrow-svg" />
              </div>

              <div className="num-of-task-div">
                <p className="eligibility-status">{eligibility}</p>
                <p className="number-of-tasks">{numberOfTasksDone}</p>
              </div>
            </div>

            <button className="verify-eligibility-btn">VERIFY ELIGIBILITY</button>

            <div className="tasks-div">
            <p className="tasks">Tasks</p>
            <hr className="tasks-hr" />

            <div className="facebook-div">
              <p className="facebook-text">Facebook</p>
              <button className="facebook-button">Follow</button>
            </div>

            <hr className="tasks-hr" />

            <div className="facebook-div">
              <p className="facebook-text">Twitter</p>
              <button className="facebook-button">Follow</button>
            </div>

            <hr className="tasks-hr" />

            <div className="facebook-div">
              <p className="facebook-text">Instgram</p>
              <button className="instagram-button">Follow</button>
            </div>

            <hr className="tasks-hr" />

            <div className="facebook-div">
              <p className="facebook-text">Telegram</p>
              <button className="facebook-button">Join Channel</button>
            </div>

            </div>

          </div>
        </div>
      </div>

  );
};

export default ProfileBox;
