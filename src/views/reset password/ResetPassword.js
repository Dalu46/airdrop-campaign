import React from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar";
import Footer from "../home/footer/Footer";
import ResetBody from "./reset body/ResetBody";

const ResetPassword = () => {
    return (
        <div className="login-view">
            <LoginNavBar />
            <ResetBody />
            <Footer darkText={true} darkLogo={true} />
        </div>
    )
}

export default ResetPassword;