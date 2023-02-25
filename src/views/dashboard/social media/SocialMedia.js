import React, {useRef} from "react";
import shape from "../../../assets/images/Shape.svg";
import axios from "axios";
import './social-media.css';

const SocialMedia = ({ socialMediaIcon, socialMediaName, userInfo }) => {
  const username = useRef();

  const verifyUsername = ()=>{
    console.log(userInfo)
    
      const data = {
        username: username.current.value,
        id: userInfo._id
      }
    if (socialMediaName === "Twitter"){
     alert('Twitter is under review');
      // axios.post('http://localhost:4000/media/twitter/success/',{withCredentials: true}, data)
      // .then((response) => {
      //   console.log(response)
      //   if (response.data.msg === "twitter verification successfull"){
      //      username.current.value = "";
      //      alert("Twitter verification successful")
      //   }
      //   else {
      //     alert('Error Verifying Twitter, Try again.')
      //   }
       
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }

    else if (socialMediaName === "Instagram"){
      axios.post('https://manilla.herokuapp.com/media/instagram/verify', data)
      .then((response) => {
        console.log(response)
        if (response.data.msg == "followed"){
           username.current.value = "";
           alert("Instagram verification successful");
        }
        else {
          alert('Error Verifying Instagram, Try again.');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else {
      alert('Telegram is under review');
      // axios.get('http://localhost:4000/media/telegram/verify', data)
      // .then((response) => {
      //   console.log(response)
      //   if (response.data.msg === "telegram verification successfull"){
      //      username.current.value = "";
      //      alert("Telegram verification successful")
      //   }
      //   else {
      //     alert('Error Verifying Telegram, Try again.')
      //   }
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  }
  return (
    <div className="social-media">
      <div className="verification-div">
        <img
          className="social-media-image"
          src={socialMediaIcon}
          alt="verify with twitter"
        />
      </div>

      <div className="social-media-name-div">
        <p className="social-media-name">{socialMediaName}</p>
        <p className="follow-social-media">
          Make sure you follow @Manillafinance on {socialMediaName} before you input your
          username
        </p>
      </div>

      <div className="connect-buttons-div">
        <input type="text" ref={username} className="user-name-input" placeholder={`Input ${socialMediaName} username`}/>
        <button type="" onClick={verifyUsername}>Verify {socialMediaName}</button>
      </div>
    </div>
  );
};

export default SocialMedia;
