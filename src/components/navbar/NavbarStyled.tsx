import styled from "@emotion/styled";
import { ColorPalette } from "../style";

export const NavbarContainer = styled.div`
  padding-top: 100px;
  padding-left: 100px;

  nav {
    display: flex;
  }

  a {
    margin-left: 30px;
    position: relative;
    color: ${ColorPalette.headingAndLabels};
    font-size: 28px;
    font-family: Montserrat;
    z-index: 2;
  }
`;

export const LinkContainer = styled.div`
  positin: relative;
`;

export const Shadow = styled.div`
  position: absolute;
  color: #5692e8;
  font-family: Montserrat;
  z-index: 0;
  opacity: 0.3;
  font-size: 58px;
  top: 55px;
`;
