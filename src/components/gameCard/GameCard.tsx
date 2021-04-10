import React from "react";
import { Card } from "antd";
import {
  GameContainer,
  MockGameImage,
  ScoreContainer,
  Score,
} from "./GameCard.Styled";
import Scrollbar from "react-scrollbars-custom";
const { Meta } = Card;

export interface GameCardProps {
  id: number;
  name: string;
  first_release_date: number;
  summary: string;
  rating: number;
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  first_release_date,
  summary,
  rating,
  id,
}) => {
  const GetFormattedDate = () => {
    var todayTime = new Date(first_release_date);
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
  };

  return (
    <GameContainer>
      <MockGameImage />
      <Card style={{ width: "100%", marginTop: "15px" }}>
        <Meta
          title={name}
          description={"Release Date: " + GetFormattedDate()}
        />
        <Scrollbar style={{ height: "90px" }}>
          <p>{summary}</p>
        </Scrollbar>
      </Card>
      <ScoreContainer>
        <Score>{(parseFloat(rating.toString()) / 10).toFixed(1)}</Score>
      </ScoreContainer>
    </GameContainer>
  );
};

export default GameCard;
