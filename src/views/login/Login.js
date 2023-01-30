import React from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar"
import Footer from "../home/footer/Footer";
import LoginBody from "./login body/LoginBody";

import "./login.css";

const Login = () => {
    return (
        <div className="login-view">
            <LoginNavBar />
            <LoginBody />
            <Footer darkText={true} darkLogo={true} isMobile={true} />
        </div>

    )
}

export default Login;