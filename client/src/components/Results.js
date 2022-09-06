import React from "react";
import { Link } from "react-router-dom";

const Results = (props) => {
  console.log(props.gameResults);
  return (
    <div className="results-container">
      {props.gameResults.map((game) => (
        <div key={game.id} className="searchedGames">
          <Link
            to={{
              pathname: `/game/${game.name}`,
              gameProps: {
                game: game,
              },
            }}
          >
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game" />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Results;
