import React from "react";
import Logo from '../../assets/icons/dark-logo.svg'
import '../navbar/NavBar.css'
import Register from "../register/RegisterBtn";
import LoginBtn from "../login/LoginBtn";

import './login-navbar.css';
import { Link } from "react-router-dom";


const LoginNavBar = ({ logoutInfo, logoutColor, loginInfo }) => {
    const logoutText = logoutInfo;
    const logouTextColor = logoutColor;
    const loginText = loginInfo;

    return (
      <div className="nav-bar login-nav-bar">
        <Link to="/"><img src={Logo} alt="MNLA logo" /></Link>
        {/* <Menu /> */}
        <div className="account-btns">
          <Link to="/login">{<LoginBtn dark={true} loginText={loginText} />}</Link>
          <Link to="/register"><Register logoutText={logoutText} logoutTextColor={logouTextColor} /></Link>
        </div>
      </div>
    );
  };
  
  export default LoginNavBar;