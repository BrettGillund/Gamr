import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Games() {
  const [switchData, setSwitchData] = useState([]);

  const grabData = () => {
    fetch("/api/nintendo-switch")
      .then((res) => res.json())
      .then((data) => {
        setSwitchData(data.results);
        console.log(data.results);
      });
  };

  useEffect(grabData, []);
  const divStyle = {
    height: "250px",
    width: "400px",
  };
  return (
    <div>
      <h1 className="centerText biggestText">Switch Games</h1>
      <div className="game-container">
        {switchData.map((nintendoSW, index) => {
          return (
            <div key={index} className="game-card">
              <Link
                to={`/game/${nintendoSW.name}`}
                state={{ game: nintendoSW }}
              >
                <img style={divStyle} src={nintendoSW.background_image}></img>
              </Link>
              <p>{nintendoSW.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
