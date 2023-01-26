import React from "react";
import './register.css'

const Register = ( {logoutText, logoutTextColor } ) => {
    return (
            <button className={`register ${logoutTextColor ? 'logout-color' : null} `}>{logoutText? "Logout" : "Register"}</button>
    )
}

export default Register;