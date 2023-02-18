import React from "react";
import Logo from '../../assets/icons/dark-logo.svg'
import '../navbar/NavBar.css'
import Register from "../register/RegisterBtn";
import LoginBtn from "../login/LoginBtn";
import blueMenu from "../../assets/icons/menuBlue.svg";

import './login-navbar.css';
import { Link } from "react-router-dom";
import Logout from "../logout/Logout";


const LoginNavBar = ({ logoutInfo, logoutColor, loginInfo, show, setShow }) => {
    const logoutText = logoutInfo;
    const logouTextColor = logoutColor;
    const loginText = loginInfo;

    const handleClick = () => {
      setShow(!show);
    }

    return (
      <div className="nav-bar login-nav-bar">
        <Link to="/"><img src={Logo} alt="MNLA logo" /></Link>
        {/* <Menu /> */}
        <div className="account-btns">
        { !logoutText ?
          <div>
          <Link to="/login">{<LoginBtn dark={true} loginText={loginText} />}</Link>
          <Link to="/register"><Register logoutText={logoutText} logoutTextColor={logouTextColor} /></Link>
          </div>
          :
          <div className="">
            <Link to="/">{<button className="login dark-text">Home</button>}</Link>
            <Logout />
          </div>
        }
          <img src={blueMenu} alt="menu" className="menu-icon" onClick={ handleClick } />
        </div>
      </div>
    );
  };
  
  export default LoginNavBar;