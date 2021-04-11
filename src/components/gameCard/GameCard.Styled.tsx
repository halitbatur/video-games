import styled from "@emotion/styled";
import { ColorPalette, BreakPoints } from "../style";

export const GameContainer = styled.div`
  color: white;
  background-color: ${ColorPalette.cardBackground};
  max-height: 150px;

  .ant-card-meta-title {
    font-family: Montserrat;
    margin-top: 15px;
    color: ${ColorPalette.headingAndLabels};
    font-size: 20px;
    line-height: 28px;

    @media (max-width: ${BreakPoints.sm}) {
      font-size: 14px;
    }
  }

  .ant-card-meta-description {
    color: ${ColorPalette.text};
    font-size: 16px;
    @media (max-width: ${BreakPoints.sm}) {
      font-size: 10px;
    }
  }

  p {
    color: ${ColorPalette.text};
    font-size: 14px;
    @media (max-width: ${BreakPoints.sm}) {
      font-size: 8px;
    }
  }
`;

export const MockGameImage = styled.div`
  background-color: #000;
`;

export const ScoreContainer = styled.div`
  text-align: center;
  display: flex;
  margin: auto;
`;

export const Score = styled.div`
  background-color: ${ColorPalette.buttons};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  @media (max-width: ${BreakPoints.sm}) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;
