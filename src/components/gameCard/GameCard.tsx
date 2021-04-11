import React from "react";
import { Card, Row, Col, Image } from "antd";
import { GameContainer, ScoreContainer, Score } from "./GameCard.Styled";
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
      <Row gutter={{ xs: 2, md: 2, lg: 8 }}>
        <Col xs={0} sm={5} md={4} lg={4}>
          <div style={{ maxHeight: "150px", height: "100%" }}>
            <Image
              src="https://i.stack.imgur.com/khVpE.png"
              alt="black"
              height="100%"
            />
          </div>
        </Col>
        <Col xs={20} sm={15} md={17} lg={17} style={{ height: "150px" }}>
          <Meta
            title={name}
            description={"Release Date: " + GetFormattedDate()}
          />
          <Scrollbar style={{ height: "60px", margin: "10px 0" }}>
            <p>{summary}</p>
          </Scrollbar>
        </Col>
        <Col
          xs={4}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ScoreContainer>
            <Score>{parseInt(rating.toString()) / 10}</Score>
          </ScoreContainer>
        </Col>
      </Row>
    </GameContainer>
  );
};

export default GameCard;
