
import React from "react";
import { Link } from "react-router-dom";

const Results = (props) => {
  console.log(props);
  return (
    <div className="results-container">
      {props.gameResults.map((game) => (
        <div key={game.id} className="searchedGames">
               <Link
                to= {`/game/${game.name}`}
                state = {{game: game}}
              >
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game" className="gameScreenshots"/>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Results;

