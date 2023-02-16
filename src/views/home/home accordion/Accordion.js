import React, { useState } from "react";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const details = [
    {
      summary: "What is the MNLA token?",
      response:
        "MNLA is the rocket fuel that powers the whole Manilla Finance Ecosystem. The token boasts of being both a governance and utility token.",
    },
    {
      summary: "What is the Manilla Finance project all about?",
      response:
        "Manilla Finance is an innovative & highly scalable project bridging features of conventional fintech services to the blockchain. Through its robust application, users will be able to pay for a variety of utility bills including Electricity, Water, Airtime/Data, Gift Cards, Hotels, Flight, Movies & Event tickets and many more utility that will be added as the ecosystem continues expansion.",
    },
    {
      summary: "What is the benefit of holding the MNLA token?",
      response:
        "If you stake the MNLA token for 365 Days, it automatically earn you a limited stake in the project. Which means at the end of the fiscal year, you are eligible to share 30% of the profit generated with other investors who have staked for same duration. You also get 20% APR of MNLA tokens as reward. Staking 365 Days on the Manilla Vault also admits you automatically into the DAO so you can participate in the open governance of the Manilla Finance project and be able to vote to determine the direction and future of the project.",
    },
    {
      summary: "When will AirDroppers be eligible to claim their tokens?",
      response:
        "Everyone who qualifies for the AirDrop will be able to claim their tokens 1 month after the token generation event. Tokens will be vested for claiming for an eight (8) months period. To qualify, all you have to do is follow our social channels, then refer 5 of your friends to join all our social channels and ensure they do so. Each person is only entitled to join the campaign with a single wallet as multiple wallets entries will be disqualified.",
    },
    {
      summary: "When will the MNLA token launch?",
      response: "The token will be launched in the first quarter of 2023.",
    },
    {
      summary:
        "What wallet address should AirDroppers submit for the future claim?",
      response: "ERC20 wallet address",
    },
  ];

  const renderDetails = details.map((detail, i) => {
    return (
      //   <details onClick={() => handleClick(index)} open={isOpen === index} key={index}>
      <div className="detail" key={i}>
        <div className="summary-text" onClick={() => toggle(i)}>
          <p>{detail.summary}</p>
        </div>
        <div
          className={selected === i ? "response-text show" : "response-text"}
        >
          {detail.response}
        </div>
      </div>
    );
  });

  return (
    <div className="accordion-div">
      <div className="accordion-wrapper">
        <p className="faq">Frenquently Asked Questions</p>
        <p className="general-text">General</p>
        <div>{renderDetails}</div>
      </div>
    </div>
  );
};

export default Accordion;
