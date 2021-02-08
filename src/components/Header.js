import React from "react";
import logo from "../assets/logo.svg";

function Header({ toggleForm }) {
  return (
    <nav className="nav-container">
      <div className="left-nav-items">
        <div className="logo">
          <img src={logo} alt="generic blog logo" />
        </div>
        <div className="logo-text">generic blog</div>
      </div>

      <div className="right-nav-items">
        <div className="login">
          <a
            href="/loginpage"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
          >
            Login
          </a>
        </div>
        <div className="rigister">
          <a
            href="/registerpage"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
