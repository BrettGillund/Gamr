import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Games() {
  const [xboxData, setXboxData] = useState([]);

  const grabData = () => {
    fetch("/api/xbox")
      .then((res) => res.json())
      .then((data) => {
        setXboxData(data.results);
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
      <h1 className="centerText biggestText">Xbox Games</h1>
      <div className="game-container">

      {xboxData.map((xbox, index) => {
        return (
          <div key={index} className="game-card">
            <Link
            to={`/game/${xbox.name}`}
            state = {{game: xbox}}>
            <img style={divStyle} src={xbox.background_image}></img>
            </Link>
            <p>{xbox.name}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Games;
