import React from "react";
import "./login.css";

const LoginBtn = ({ dark, loginText, instructions }) => {
  return (
    // <button className={`login ${ dark ? 'dark-text' : null}`}>{loginText ? 'Home' : 'Login'}</button>
    <button
      className={`login ${
        dark ? "dark-text" : instructions ? "login-instruction" : "null"
      }`}
    >
      {/* {loginText ? "Home" : "Login"} */}
      Login
    </button>
  );
};

export default LoginBtn;
