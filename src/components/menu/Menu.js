import React from "react";
import "./Menu.css";

const Menu = ({ isMobile }) => {
  const items = ["Home", "Whitepaper", "MNLA Token"];
  const renderedItem = items.map((item, index) => (
    <span>
      <p className="menu-text" key={index}>
        {item}
      </p>
      {/* <hr className={isMobile ? "mobile-menu-hr" : "menu-hr"} /> */}
    </span>
  ));

  return (
    <div className={isMobile ? "menu-mobile" : "menu"}>{renderedItem}</div>
  );
};

export default Menu;
