import React from "react";
import Logo from '../../assets/icons/dark-logo.svg'
import '../navbar/NavBar.css'
import Register from "../register/RegisterBtn";
import LoginBtn from "../login/LoginBtn";

import './login-navbar.css';


const LoginNavBar = ({ logoutInfo, logoutColor, loginInfo }) => {
    const logoutText = logoutInfo;
    const logouTextColor = logoutColor;
    const loginText = loginInfo;

    return (
      <div className="nav-bar login-nav-bar">
        <img src={Logo} alt="MNLA logo" />
        {/* <Menu /> */}
        <div className="account-btns">
          <LoginBtn dark={true} loginText={loginText} />
          <Register logoutText={logoutText} logoutTextColor={logouTextColor} />
        </div>
      </div>
    );
  };
  
  export default LoginNavBar;