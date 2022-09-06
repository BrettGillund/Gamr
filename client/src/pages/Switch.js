import { useState, useEffect } from "react";

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
    height: "200px",
    width: "300px",
  };
  return (
    <div>
      <h1>Switch Games</h1>
      <div className="game-container">
      {switchData.map((nintendoSW, index) => {
        return (
          <div key={index} className="game-card">
            <img style={divStyle} src={nintendoSW.background_image}></img>
            <p>{nintendoSW.name} {nintendoSW.rating}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Games;
