import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import LoginBtn from "../login/LoginBtn";
import menuIcon from "../../assets/icons/menu-icon.svg";

import Menu from "../menu/Menu";
import Register from "../register/RegisterBtn";
import "./NavBar.css";

const NavBar = ({ show, setShow }) => {
  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className="nav-bar">
      <img src={Logo} alt="MNLA logo" />
      <Menu />
      <div className="account-btns">
        <Link to="/login">{<LoginBtn />}</Link>
        <Link to="/register">{<Register />}</Link>
        <img onClick={ handleClick } src={menuIcon} alt="Menu" className="menu-icon" />
      </div>
    </div>
  );
};

export default NavBar;
