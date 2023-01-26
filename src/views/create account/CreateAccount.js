import React from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar";
import Footer from "../home/footer/Footer";
import AccountBody from "./create account body/AccountBody";

const CreateAccount = () => {
    return (
        <div className="login-view">
            <LoginNavBar />
            <AccountBody />
            <Footer darkText={true} darkLogo={true} />
        </div>
    )
}

export default CreateAccount;