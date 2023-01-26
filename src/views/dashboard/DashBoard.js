import React from "react";
import LoginNavBar from "../../components/login navbar/LoginNavBar";
import DashBoardBody from "./dashboard body/DashBoardBody";

const DashBoard = () => {
    return (
        <div className="dash-board">
            <LoginNavBar logoutInfo={true} logoutColor={true} loginInfo={true} />
            <DashBoardBody />
        </div>
    )
}

export default DashBoard;