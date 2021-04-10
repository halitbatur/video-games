import styled from "@emotion/styled";

export const GameContainer = styled.div`
  display: flex;
  color: white;
  column-gap: 20px;
  background-color: #0e1a2b;
  max-height: 150px;
  .ant-card-meta-title {
    margin-top: 15px;
    color: #ffffff;
    font-size: 20px;
    line-height: 28px;
  }

  .ant-card-meta-description {
    color: #c1d1e8;
    font-size: 16px;
  }

  p {
    color: #c1d1e8;
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
  background-color: #5692e8;
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
