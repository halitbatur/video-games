import React from "react";
import FilterBar from "../../components/filterBar/FilterBar";
import GameCard, { GameCardProps } from "../../components/gameCard/GameCard";
import { GamesContainer } from "./VideoGamesPage.styled";
import { Row, Col } from "antd";
import Scrollbar from "react-scrollbars-custom";

const VIDEO_GAMES_API: string =
  "https://public.connectnow.org.uk/applicant-test/.";

const VideoGamesPage = () => {
  const [games, setGames] = React.useState<GameCardProps[]>();

  React.useEffect(() => {
    fetch(VIDEO_GAMES_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }, []);

  return (
    <div style={{ padding: "0 100px" }}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={6}>
          <FilterBar />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          {" "}
          <Scrollbar style={{ height: "90vh", margin: "10px 0" }}>
            <GamesContainer>
              {games?.map((game) => (
                <GameCard
                  id={game.id}
                  rating={game.rating}
                  name={game.name}
                  first_release_date={game.first_release_date}
                  summary={game.summary}
                />
              ))}
            </GamesContainer>
          </Scrollbar>
        </Col>
      </Row>
    </div>
  );
};

export default VideoGamesPage;
