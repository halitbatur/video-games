import React from "react";
import { NavbarContainer, Shadow, LinkContainer } from "./NavbarStyled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav>
        <LinkContainer>
          <Shadow>VIDEO</Shadow>
          <Link to="/">VIDEO GAMES</Link>
        </LinkContainer>
        <LinkContainer>
          <Shadow>CONTACT</Shadow>
          <Link to="/contact">CONTACT</Link>
        </LinkContainer>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
