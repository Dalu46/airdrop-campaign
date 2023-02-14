import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import whitePaper from "../../assets/white paper/Manilla White Paper.pdf";

const Menu = ({ isVisible, isMobile }) => {
  
  return (
    // <div ref={menuRef} className={isMobile ? "menu-mobile" : "menu"}>{renderedItem}</div>
    <>
      {isVisible && isMobile ? (
        <div className="menu-mobile">
          <Link to="/">
            <p className="menu-text">Home</p>
          </Link>
          <a href={whitePaper}>
            <p className="menu-text">Whitepaper</p>
          </a>
          <a href="https://www.manilla.finance/token">
            <p className="menu-text">MNLA Token</p>
          </a>

          {/* this is for testing other component  */}
          <hr />
          <Link to='/checkmail'><p>check your mail</p></Link>
          <Link to='/resetpassword'><p>reset password successfull</p></Link>
          <Link to='/resetforgottenpassword'><p>reset password</p></Link>
          <Link to='/forgotpassword'><p>forgot password</p></Link>
          <Link to='/dashboard'><p>dashboard</p></Link>
          <Link to='/successmail'><p>Success mail</p></Link>
        </div>
      ) : (
        <div className="menu">
          {/* <div className="menu-mobile"> */}
            <Link to="/">
              <p className="menu-text">Home</p>
            </Link>
            <a href={whitePaper}>
              <p className="menu-text">Whitepaper</p>
            </a>
            <a href="https://www.manilla.finance/token">
              <p className="menu-text">MNLA Token</p>
            </a>
          {/* </div>{" "} */}
        </div>
      )}
    </>
  );
};

export default Menu;
