import styled from "@emotion/styled";
import { ColorPalette, BreakPoints } from "../../components/style";

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
  width: 40%;
  margin: auto;
  margin-bottom: 30px;

  @media (max-width: ${BreakPoints.lg}) {
    width: 55%;
  }

  @media (max-width: ${BreakPoints.md}) {
    width: 70%;
  }

  @media (max-width: ${BreakPoints.sm}) {
    width: 80%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  background-color: ${ColorPalette.cardBackground};
  padding: 20px;

  @media (max-width: ${BreakPoints.md}) {
    width: 55%;
  }

  @media (max-width: ${BreakPoints.md}) {
    width: 70%;
  }

  @media (max-width: ${BreakPoints.sm}) {
    width: 80%;
  }
`;
