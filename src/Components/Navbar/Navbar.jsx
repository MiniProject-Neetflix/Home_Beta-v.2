import React from "react";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <h1 className="logo">Neetflix Review</h1>
        <ul>
          <li>Home</li>
          <li>Tv Series</li>
          <li>Animation</li>
          <li>My List</li>
          <li>Reviewed</li>
        </ul>
      </div>
      <div className="navbar-search">
        <Input
          inputClassName={"inputNavbar"}
          type="text"
          placeholder="Search"
        />
        <ul>
          <PrimaryButton className="signup-btn">Sign Up</PrimaryButton>
          <PrimaryButton>Login</PrimaryButton>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
