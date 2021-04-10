import styled from "@emotion/styled";
import { ColorPalette } from "../style";

export const FilterBarContainer = styled.div`
  background-color: ${ColorPalette.cardBackground};
  color: ${ColorPalette.headingAndLabels};
  font-family: Montserrat;
  p {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const FilterContent = styled.div`
  padding: 15px;
  margin-top: 10px;
`;

export const Header = styled.header`
  font-size: 20px;
  margin-bottom: 35px;
`;
