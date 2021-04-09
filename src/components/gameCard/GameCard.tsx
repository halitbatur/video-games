import React from "react";
import { Card } from "antd";
import { GameContainer, MockGameImage } from "./GameCardStyled";
import Scrollbar from "react-scrollbars-custom";
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

  const GetFormattedDate = () => {
    var todayTime = new Date(releaseDate);
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
          title={gameTitle}
          description={"Release Date: " + GetFormattedDate()}
        />
        <Scrollbar style={{ height: "90px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, explicabo facere soluta quae sunt incidunt adipisci,
            corporis eos, porro alias asperiores tenetur voluptates fugiat
            dolorum impedit nulla magni nisi. Fugit recusandae architecto
            perspiciatis. Perferendis excepturi, tenetur harum iure nulla
            laboriosam!
          </p>
        </Scrollbar>
      </Card>
      <div
        style={{
          width: "150px",
          textAlign: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "#5692e8",
            borderRadius: "100%",
            width: "50px",
            height: "50px",
            fontSize: "28px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          9
        </div>
      </div>
    </GameContainer>
  );
};

export default GameCard;
