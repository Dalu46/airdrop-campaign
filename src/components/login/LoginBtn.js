import React from "react";
import './login.css';

const LoginBtn = ({ dark,loginText }) => {
    return (
            <button className={`login ${ dark ? 'dark-text' : null}`}>{loginText ? 'Home' : 'Login'}</button>
    )
}

export default LoginBtn;