import React from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar";
import Footer from "../home/footer/Footer";
import ForgotBody from "./forgot body/ForgotBody";

const ForgotPassword = () => {
  return (
    <div>
      <LoginNavBar />
      <ForgotBody />
      <Footer darkLogo={true} darkText={true} />
    </div>
  );
};

export default ForgotPassword;
