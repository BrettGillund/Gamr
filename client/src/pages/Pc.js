
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
      <h3>pc Data</h3>
      {pcData.map((pc, index) => {
        return (
          <div key={index} className="game-card">
            <img style={divStyle} src={pc.background_image}></img>
            <p>{pc.name} {pc.rating}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Games;

