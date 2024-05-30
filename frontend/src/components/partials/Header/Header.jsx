import React, { useState } from "react";
import "./Header.css"
import { ReactNavbar } from "overlay-navbar";
const Header = () => {
  return (
    <>
    <div className="nav">
      <div className="logo">
        logon
      </div>
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
    <a href="#">Link 5</a>
  </div>
</div>
    </>
  );
};

export default Header;
