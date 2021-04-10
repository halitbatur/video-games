import styled from "@emotion/styled";
import { ColorPalette } from "../style";

export const GameContainer = styled.div`
  display: flex;
  color: white;
  column-gap: 20px;
  background-color: ${ColorPalette.cardBackground};
  max-height: 150px;
  .ant-card-meta-title {
    margin-top: 15px;
    color: ${ColorPalette.headingAndLabels};
    font-size: 20px;
    line-height: 28px;
  }

  .ant-card-meta-description {
    color: ${ColorPalette.text};
    font-size: 16px;
  }

  p {
    color: ${ColorPalette.text};
    font-size: 14px;
  }
`;

export const MockGameImage = styled.div`
  width: 180px;
  height: 150px;
  background-color: #000;
`;

export const ScoreContainer = styled.div`
  width: 150px;
  text-align: center;
  display: flex;
`;

export const Score = styled.div`
  background-color: ${ColorPalette.buttons};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  fontsize: 28px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
`;
