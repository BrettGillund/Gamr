import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Games() {
  const [playStationData, setPlaystationData] = useState([]);

  const grabData = () => {
    fetch("/api/playstation")
      .then((res) => res.json())
      .then((data) => {
        setPlaystationData(data.results);
        console.log(data.results);
      });
  };

  useEffect(grabData, []);
  const divStyle = {
    height: "200px",
    width: "300px",
  };
  return (
    <div>
      <h1 className="centerText biggestText">PlayStation Data</h1>
      <div className="game-container">
        {playStationData.map((playstation, index) => {
          return (
            <div key={index} className="game-card">
              <Link
                to={`/game/${playstation.name}`}
                state={{ game: playstation }}
              >
                <img style={divStyle} src={playstation.background_image}></img>
              </Link>
              <p>{playstation.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
