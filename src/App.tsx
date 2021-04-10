import React from "react";
import GameCard from "../src/components/gameCard/GameCard";
import { GameCardProps } from "../src/components/gameCard/GameCard";

function App() {
  const [games, setGames] = React.useState<GameCardProps[]>();
  React.useEffect(() => {
    fetch("https://public.connectnow.org.uk/applicant-test/.")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }, []);
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
    >
      {games?.map((game) => (
        <GameCard
          id={game.id}
          rating={game.rating}
          name={game.name}
          first_release_date={game.first_release_date}
          summary={game.summary}
        />
      ))}
    </div>
  );
}

export default App;
