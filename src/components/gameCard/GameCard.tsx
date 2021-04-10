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
  const [loading, setLoading] = React.useState<boolean>(false);

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
      <Card
        style={{ width: "100%", marginTop: "15px" }}
        hoverable={true}
        loading={loading}
      >
        <Meta
          title={name}
          description={"Release Date: " + GetFormattedDate()}
        />
        <Scrollbar style={{ height: "90px" }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            animi sunt corporis architecto itaque. Delectus error deserunt
            dolores eos iusto accusamus optio fuga, quos ipsa quisquam omnis quo
            sed minima.
          </p>
        </Scrollbar>
      </Card>
      <ScoreContainer>
        <Score>{(parseFloat(rating.toString()) / 10).toFixed(1)}</Score>
      </ScoreContainer>
    </GameContainer>
  );
};

export default GameCard;
