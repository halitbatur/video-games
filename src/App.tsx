import React from "react";
import GameCard from "../src/components/gameCard/GameCard";

function App() {
  return (
    <div className="App">
      <GameCard
        id={100}
        rating={98.0}
        gameTitle="Gamer Title"
        releaseDate={1519171200000}
        summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aut earum neque recusandae officiis provident quod ut. Dolorum, natus facere!"
      />
    </div>
  );
}

export default App;
