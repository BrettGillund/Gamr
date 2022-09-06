import { useState, useEffect } from "react";

function Games() {
  const [pcData, setPcData] = useState([]);

  const grabData = () => {
    fetch("/api/pc")
      .then((res) => res.json())
      .then((data) => {
        setPcData(data.results);
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
      <h1 className="centerText biggestText">PC Games</h1>
      <div className="game-container">
        {pcData.map((pc, index) => {
          return (
            <div key={index} className="game-card">
              <a href="http://www.google.com" target="_blank">
              <img style={divStyle} src={pc.background_image}/>
              </a>
              <p>{pc.name}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Games;
