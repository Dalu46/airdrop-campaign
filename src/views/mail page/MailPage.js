import React from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar";
import Footer from "../home/footer/Footer";
import MailBody from "./mail body/MailBody";

const MailPage = () => {
    return (
        <div className="mail-page login-view">
            <LoginNavBar />
            <MailBody />
            <Footer darkText={true} darkLogo={true} />
        </div>
    )

}

export default MailPage;