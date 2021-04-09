import React from "react";
import { Card } from "antd";
import { GameContainer, MockGameImage } from "./GameCardStyled";

const { Meta } = Card;

interface GameCardProps {
  id: number;
  gameTitle: string;
  releaseDate: number;
  summary: string;
  rating: number;
}

const GameCard: React.FC<GameCardProps> = ({
  gameTitle,
  releaseDate,
  summary,
  rating,
  id,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useState(() => {
    setTimeout(() => {
      setLoading(false);
      console.log(new Date(1519171200000));
    }, 2000);
  });

  return (
    <GameContainer>
      <MockGameImage />
      <Card
        style={{ width: "100%", marginTop: "5px", overflowY: "scroll" }}
        hoverable={true}
        loading={loading}
      >
        <Meta title={gameTitle} description={"Release Date" + releaseDate} />
        <p>{summary}</p>
      </Card>
      <div>{rating}</div>
    </GameContainer>
  );
};

export default GameCard;
