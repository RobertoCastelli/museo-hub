import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img
          className="header-logo"
          src={logo}
          alt="museum event placeholder"
        />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
