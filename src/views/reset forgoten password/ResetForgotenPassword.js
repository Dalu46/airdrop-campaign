import React from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar";
import Footer from "../home/footer/Footer";
import ResetForgotenBody from "./reset forgotten password body/ResetForgottenBody";

const ResetForgottenPassword = () => {
    return (
        <div className="login-view">
            <LoginNavBar />
            <ResetForgotenBody />
            <Footer darkLogo={true} darkText={true} />
        </div>
    )
}

export default ResetForgottenPassword;