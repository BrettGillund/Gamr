import {useState, useEffect} from 'react'

function Games() {
    const [gameData, setGameData] = useState([]);

    const grabData = () => {
      fetch('/api/games')
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setGameData(data.results);
        });
    };
  
    useEffect(grabData, []);
  
  return (
    <div>
        <h3>Game Data</h3>
      {gameData.map((game, index) => {
        return <p key={index}>{game.name}</p>
      })}
    </div>
  )
}

export default Games