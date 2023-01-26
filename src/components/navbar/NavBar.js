import React from "react";
import Logo from "../../assets/icons/Logo.svg";
import LoginBtn from "../login/LoginBtn";
import Menu from "../menu/Menu";
import Register from "../register/RegisterBtn";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={Logo} alt="MNLA logo" />
      <Menu />
      <div className="account-btns">
        <LoginBtn />
        <Register />
      </div>
    </div>
  );
};

export default NavBar;
