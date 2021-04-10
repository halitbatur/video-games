import React from "react";
import GameCard, { GameCardProps } from "../../components/gameCard/GameCard";
import { GamesContainer } from "./VideoGamesPage.styled";

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
    <div>
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
    </div>
  );
};

export default VideoGamesPage;
