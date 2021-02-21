/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header({ toggleForm, setButtonText, setAuthStatus }) {
  const history = useHistory();

  return (
    <nav className="nav-container">
      <div className="left-nav-items">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="generic blog logo" />
          </div>
        </Link>
        <div className="logo-text">generic blog</div>
      </div>

      {location.pathname === "/" ? (
        <div className="right-nav-items">
          <div
            className="login"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
              setButtonText("Login");
            }}
          >
            Login
          </div>
          <div
            className="register"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
              setButtonText("Register");
            }}
          >
            Register
          </div>
        </div>
      ) : (
        <div
          className="logout"
          onClick={(e) => {
            e.preventDefault();
            setAuthStatus(false);
            sessionStorage.clear();
            history.push("/");
          }}
        >
          Logout
        </div>
      )}
    </nav>
  );
}

export default Header;
