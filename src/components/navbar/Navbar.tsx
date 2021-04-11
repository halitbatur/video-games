import React from "react";
import { NavbarContainer, Shadow, LinkContainer } from "./NavbarStyled";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../App";

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <nav>
        {ROUTES.map((route) => (
          <LinkContainer key={route.path}>
            {location.pathname === route.path && (
              <Shadow>{route.shadow}</Shadow>
            )}
            <Link to={route.path}>{route.linkName}</Link>
          </LinkContainer>
        ))}
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
