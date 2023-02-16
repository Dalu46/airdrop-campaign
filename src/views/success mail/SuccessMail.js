import React, { useState } from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar";
import Menu from "../../components/menu/Menu";
import Footer from "../home/footer/Footer";
import SuccessMailBody from "./SuccessMailBody";

const SuccessMail = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="success-mail">
            <LoginNavBar show={show} setShow={setShow} />
            <Menu isVisible={show} isMobile={true} />
            <SuccessMailBody />
            <Footer darkText={true} darkLogo={true} isMobile={true} />
        </div>
    )
}

export default SuccessMail;