import React from "react";
import { NavbarContainer } from "./NavbarStyled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav>
        <Link to="/">VIDEO GAMES</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
