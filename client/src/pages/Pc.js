// import { useState, useEffect } from "react";

// function Games() {
//   const [pcData, setPCData] = useState([]);

//   const grabData = () => {
//     fetch("/api/games/pc")
//       .then((res) => res.json())
//       .then((data) => {
//         setPCData(data.results);
//         console.log(data.results);
//       });
//   };

//   useEffect(grabData, []);
//   const divStyle = {
//     height: "200px",
//     width: "300px",
//   };
//   return (
//     <div>
//       <h3>Game Data</h3>
//       {gameData.map((game, index) => {
//         return (
//           <div key={index} className="game-card">
//             <img style={divStyle} src={game.background_image}></img>
//             <p>{game.name} {game.rating}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Games;
