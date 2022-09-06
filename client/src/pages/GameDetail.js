

import {useLocation} from "react-router-dom"
const GameDetail = () => {
  let {
    state: { game },
  } = useLocation();

  return (
    <div>
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <h3>Genre(s):</h3>
      {game.genres.map((games) => `${games.name}`)}
      <h3>Platforms(s)</h3>
      {game.platforms.map((p) => `${p.platform.name} | `)}

      <ul>
        {game.short_screenshots.map((ss) => (
          <li>
            <img src={ss.image} alt="screenshot"></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GameDetail