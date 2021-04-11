import styled from "@emotion/styled";
import { ColorPalette } from "../../components/style";

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  color: ${ColorPalette.text};
  font-family: Mulish;

  h3 {
    font-size: 18px;
    color: ${ColorPalette.text};
  }

  h2 {
    font-size: 26px;
    color: ${ColorPalette.text};
    font-weight: bold;
  }

  .ant-input {
    background-color: ${ColorPalette.inputBackground};
    color: ${ColorPalette.headingAndLabels};
    border: none;
  }
`;

export const GetInTouchContainer = styled.div`
  width: 30%;
  margin: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
  background-color: ${ColorPalette.cardBackground};
  padding: 20px;
`;
