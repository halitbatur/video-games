import styled from "@emotion/styled";
import { ColorPalette, BreakPoints } from "../style";

export const NavbarContainer = styled.div`
  padding-top: 100px;
  padding-left: 100px;

  nav {
    display: flex;
    @media (max-width: ${BreakPoints.md}) {
      flex-direction: column;
      row-gap: 30px;
    }
  }

  @media (max-width: ${BreakPoints.md}) {
    padding-left: 50px;
  }

  @media (max-width: ${BreakPoints.sm}) {
    padding-left: 0px;
  }

  a {
    margin-left: 30px;
    position: relative;
    color: ${ColorPalette.headingAndLabels};
    font-size: 28px;
    font-family: Montserrat;
    z-index: 2;
    @media (max-width: ${BreakPoints.sm}) {
      font-size: 22px;
      margin-left: 20px;
    }
  }
`;

export const LinkContainer = styled.div`
  position: relative;
`;

export const Shadow = styled.div`
  position: absolute;
  color: #5692e8;
  font-family: Montserrat;
  z-index: 0;
  opacity: 0.3;
  font-size: 58px;
  bottom: 5px;

  @media (max-width: ${BreakPoints.md}) {
    opacity: 0.2;
  }

  @media (max-width: ${BreakPoints.sm}) {
    font-size: 40px;
    left: 5px;
  }
`;
