import { useState, useEffect } from "react";
function Landing(props) {
  const [gameData, setGameData] = useState([]);

  const grabData = () => {
    fetch("/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGameData(data.results);
        console.log(data.results);
      });
  };

  useEffect(grabData, []);
  const divStyle = {
    height: "250px",
    width: "400px",
  };
  return (
    <div className="centerText">
      <h1>
        Welcome {props.user ? props.user.email : "Guest"}! Please Register for
        an account!
      </h1>
      <div>
        <h1>Top games of the year</h1>
        <div className="game-container ">
          {gameData.map((game, index) => {
            return (
              <div key={index}>
                <div className="game-card">
                  <img style={divStyle} src={game.background_image}></img>
                  <p>{game.name}</p>
                  <p>
                    Rating: {game.rating} / {game.rating_top}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
