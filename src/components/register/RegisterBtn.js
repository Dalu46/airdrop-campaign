import React from "react";
import useDisable from "../../custom hooks/useEnable";
import './register.css'

const Register = ( {logoutText, logoutTextColor } ) => {

    return (
            <button className={`register ${logoutTextColor ? 'logout-color' : null} `}>{logoutText? "Logout" : "Register"}</button>
    )
}

export default Register;