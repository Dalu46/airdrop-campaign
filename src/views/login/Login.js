import React, { useState } from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar"
import Menu from "../../components/menu/Menu";
import Footer from "../home/footer/Footer";
import LoginBody from "./login body/LoginBody";

import "./login.css";

const Login = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="login-view">
            <LoginNavBar show={show} setShow={setShow} />
            <Menu isVisible={show} isMobile={true} />
            <LoginBody />
            <Footer darkText={true} darkLogo={true} isMobile={true} />
        </div>

    )
}

export default Login;