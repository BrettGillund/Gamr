import { useState, useEffect } from "react";

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
    height: "200px",
    width: "300px",
  };
  return (

    <div>
      <h1 className="centerText">Xbox Games</h1>
      <div className="game-container">

      {xboxData.map((xbox, index) => {
        return (
          <div key={index} className="game-card">
            <img style={divStyle} src={xbox.background_image}></img>
            <p>{xbox.name}</p>
            <p>
                Rating: {xbox.rating} / {xbox.rating_top}
              </p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Games;
