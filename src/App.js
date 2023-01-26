import React from "react";
import CreateAccount from "./views/create account/CreateAccount";
import DashBoard from "./views/dashboard/DashBoard";
import ForgotPassword from "./views/forgot password/ForgotPassword";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import MailPage from "./views/mail page/MailPage";
import ResetForgottenPassword from "./views/reset forgoten password/ResetForgotenPassword";
import ResetPassword from "./views/reset password/ResetPassword";

function App() {
  // width: 80%;

  // max-width: 500px;
  return (
    <div className="App">
      <Home />
      {/* <Login /> */}
      {/* <CreateAccount /> */}
      {/* <MailPage /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <ResetForgottenPassword /> */}
      {/* <DashBoard /> */}
    </div>
  );
}

export default App;
