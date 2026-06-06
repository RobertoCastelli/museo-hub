import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import "../styles/components.css";

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="Museum event placeholder" />

      <Navbar />
    </header>
  );
}

export default Header;
