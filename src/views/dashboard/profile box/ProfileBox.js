import React, {useRef, useEffect} from "react";
import sheild from "../../../assets/images/shield 1.svg";
import arrow from '../../../assets/icons/Vector.svg';
import axios from 'axios';
import './profile-box.css';

const ProfileBox = ({userInfo}) => {
  const wallet = useRef();
  const verifyEligibility = async ()=>{
    const data = {
      id: userInfo._id
    }
    axios.post('http://localhost:4000/api/verify-eligibility', data)
    .then((response) => {
      console.log(response)
      if (response.data.msg == "eligible"){
         alert("Congratulations, You are now eligible for an airdrop.");
      }
      else if(response.data.msg == "not eligible"){
        alert("You are not eligible for an airdrop, Complete tasks and try again.")
      }
      else {
        alert('Error Verifying Eligibility, Try again.');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const updateWallet = async ()=> {
    const data = {
      id: userInfo._id,
      newWallet: wallet.current.value
    }
    axios.post('http://localhost:4000/api/update-wallet-address', data)
    .then((response) => {
      console.log(response)
      if (response.data.msg == "updated"){
         wallet.current.value = data.newWallet;
         alert("Wallet Address successfully updated");
      }
      else {
        alert('Error updating wallet address, Try again.');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="profile-box-container">
      <div className="profile">
        <div className="profile-div">
          <p className="connect-text">Profile</p>
          <p className="follow-us-text">Update basic information about your account</p>
        </div>

        <div className="name-div-wrapper-x">
          <div className="name-div">
            <p>Wallet Address</p>
            <button onClick={updateWallet} className="change-name">Change Wallet Address</button>
          </div>
          <div className="user-name">
            <input
            ref={wallet}
              className="full-name"
              type="text"
              // disabled="true"
              placeholder={`${userInfo.walletAddress}`}
            />
            <hr className="userName-hr" />
          </div>

          {/* <div className="name-div">
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
            <button className="change-name">
              Change password
            </button>
          </div> */}
          {/* <div className="user-name">
            <input className="full-name" type="password" placeholder="password" />
            <hr className="userName-hr" />
          </div>

          <div className="name-div">
            <p className="full-name">Phone</p>
            <button className="change-name">
              Update
            </button>
          </div>
          <div className="user-name">
            <input className="full-name" type="number" placeholder={`${phone}`} />
            <hr className="userName-hr" />
          
          </div> */}
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
                {
                  userInfo.eligibilityStatus?
            <p className="eligibility-status-p">ELIGIBLE FOR AIRDROP</p>:
            <p className="eligibility-status">NOT ELIGIBLE FOR AIRDROP</p>
                }
                
              </div>
            </div>
            {
          userInfo.twitterVerified == false || userInfo.telegramVerified === false || userInfo.instagramVerified == false?
          <div className="verify-eligibility-div">
          <button onClick={verifyEligibility} className="verify-eligibility-btn">VERIFY ELIGIBILITY</button>
          </div>: <div className="mt"></div>
        }
            

            <div className="tasks-div">
            <p className="tasks">Tasks</p>

            <hr className="tasks-hr" />

            <div className="facebook-div">
              <p className="facebook-text">Twitter</p>
              {userInfo.twitterVerified?
            <button style={{backgroundcolor: "green"}} className="facebook-button-p">Verified</button>:
            <button style={{backgroundcolor: "red"}} className="facebook-button-n">not verfied</button>  
            }
              
            </div>

            <hr className="tasks-hr" />

            <div className="facebook-div">
              <p className="facebook-text">Instagram</p>
              {userInfo.instagramVerified?
              <button style={{backgroundcolor: "green"}} className="facebook-button-p">Verified</button>:
              <button style={{backgroundcolor: "red"}} className="facebook-button-n">not verfied</button>
}
            </div>

            <hr className="tasks-hr" />

            <div className="facebook-div">
              <p className="facebook-text">Telegram</p>
              {userInfo.telegramVerified?
              <button style={{backgroundcolor: "green"}} className="facebook-button-p">Joined</button>:
              <button style={{backgroundcolor: "red"}} className="facebook-button-n">not joined</button>
}
            </div>

            </div>

          </div>
        </div>
      </div>

  );
};

export default ProfileBox;
