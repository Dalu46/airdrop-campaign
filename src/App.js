import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./views/create account/CreateAccount";
import DashBoard from "./views/dashboard/DashBoard";
import ForgotPassword from "./views/forgot password/ForgotPassword";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import MailPage from "./views/mail page/MailPage";
import ResetForgottenPassword from "./views/reset forgoten password/ResetForgotenPassword";
import ResetPassword from "./views/reset password/ResetPassword";
import SuccessMail from "./views/success mail/SuccessMail";
import ProtectedRoute from './utils/protectedRoute';

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/checkmail" element={<MailPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpasswordsuccess" element={<ResetPassword />} />
        <Route path="/api/reset-password/:userId/:token" element={<ResetForgottenPassword />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
        <DashBoard />
        </ProtectedRoute>
      }/>
        <Route path="/successmail" element={<SuccessMail />} />
    </Routes>
  );
}

export default App;
