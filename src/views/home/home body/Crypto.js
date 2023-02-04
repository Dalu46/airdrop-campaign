import React from "react";
import pngegg1 from "../../../assets/icons/pngegg 1.svg";
import "./crypto.css";

const Crypto = () => {
  return (
    <div className="crypto">
      <div className="mnla-token">
        <p className="mnla-token-sale">$MNLA Airdrop Allocation</p>
        <p className="mnla-available">2.5 $MNLA Available</p>

        <div className="hr-box hr-box-crypto">
          <hr className="short-hr hr-crypto" />
          <hr className="long-hr hr-crypto" />
          <hr className="short-hr hr-crypto" />
        </div>
      </div>

      <div className="token-price">
        <div className="token-price-box">
          <p>TOKEN PRICE</p>
          <p className="crypto-text">1 $MNLA = $0.1</p>
        </div>

        <div className="block-chain">
          <p>BLOCKCHAIN</p>
          <div className="ethereum-box">
            <span><img className="ethereum-img" src={pngegg1} alt="Ethereum icon" /></span>
            <p className="crypto-text">Ethereum</p>
          </div>
        </div> 
        <p className="followers">For the first 50,000 followers</p>
      </div>

      <div className="instructions">
        <button className="instructions-btn">View Instructions</button>
        <button className="instructions-btn join-campaign">Join Campaign</button>
      </div>
    </div>
  );
};

export default Crypto;
