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

  input,
  .ant-input,
  .ant-select-selector,
  .ant-select-selection {
    background-color: ${ColorPalette.inputBackground}!important;
    color: ${ColorPalette.headingAndLabels};
  }

  .svg {
    height: 2em;
  }
`;

export const IntpuContainer = styled.div`
  margin-bottom: 30px;
`;

export const FilterContent = styled.div`
  padding: 15px;
  margin-top: 10px;
`;

export const Header = styled.header`
  font-size: 20px;
  margin-bottom: 35px;
`;

export const ArrowContainer = styled.div`
  background-color: ${ColorPalette.buttons};
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
