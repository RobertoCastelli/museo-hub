import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header-container">
      <img className="header-logo" src={logo} alt="museum event placeholder" />

      <Navbar />
    </header>
  );
}

export default Header;
