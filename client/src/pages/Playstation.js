import { useState, useEffect } from "react";

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
      <h1>PlayStation Data</h1>
      {playStationData.map((playstation, index) => {
        return (
          <div key={index} className="game-card">
            <img style={divStyle} src={playstation.background_image}></img>
            <p>{playstation.name} {playstation.rating}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Games;