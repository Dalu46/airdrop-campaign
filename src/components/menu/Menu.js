import React, { useRef } from "react";
import "./Menu.css";

const Menu = ({ isVisible, isMobile }) => {


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
    // <div ref={menuRef} className={isMobile ? "menu-mobile" : "menu"}>{renderedItem}</div>
    <>
      {
        isVisible && isMobile ?
        <div className="menu-mobile">{renderedItem}</div> 
        :
        <div className="menu">{renderedItem}</div>
      }
    </>
  );
};

export default Menu;
