import React from "react";
import AirDrop from "../../components/airdrop/AirDrop";
// import NavBar from "../../components/navbar/NavBar";
import './head.css';

const HomeHeader = () => {
  return (
    <div className="home-header">
      <p className="manilla-text">
        <span>Manilla Finance</span> is an innovative & highly scalable <span>project</span> bridging
        conventional <span>fintech services</span> to the blockchain and increasing utility
        for <span>crypto assets</span>.
      </p>

      <div className="hr-box">
        <hr className="short-hr"/>
        <hr className="long-hr"/>
        <hr className="short-hr" />
      </div>

      <AirDrop />
    </div>
  );
};

export default HomeHeader;
