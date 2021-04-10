import React from "react";
import FilterBar from "../../components/filterBar/FilterBar";
import GameCard, { GameCardProps } from "../../components/gameCard/GameCard";
import { GamesContainer, PageContainer } from "./VideoGamesPage.styled";
import { Row, Col, Spin } from "antd";
import Scrollbar from "react-scrollbars-custom";

const VIDEO_GAMES_API: string =
  "https://public.connectnow.org.uk/applicant-test/.";

const VideoGamesPage = () => {
  const [games, setGames] = React.useState<GameCardProps[]>();
  const [filteredGames, setFilteredGames] = React.useState<GameCardProps[]>();

  const fetchData = async () => {
    const fetchedData = await fetch(VIDEO_GAMES_API);
    const data = await fetchedData.json();
    setGames(data);
    setFilteredGames(data);
  };

  React.useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <PageContainer style={{ padding: "50px 100px 0" }}>
      <Row gutter={32}>
        <Col xs={24} sm={24} md={24} lg={6}>
          <FilterBar games={games} setFilteredGames={setFilteredGames} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          {filteredGames ? (
            <Scrollbar style={{ height: "90vh", margin: "10px 0" }}>
              <GamesContainer>
                {filteredGames?.map((game) => (
                  <GameCard
                    key={game.id}
                    id={game.id}
                    rating={game.rating}
                    name={game.name}
                    first_release_date={game.first_release_date}
                    summary={game.summary}
                  />
                ))}
              </GamesContainer>
            </Scrollbar>
          ) : (
            <Spin size="large" style={{ margin: "auto", display: "block" }} />
          )}
        </Col>
      </Row>
    </PageContainer>
  );
};

export default VideoGamesPage;
