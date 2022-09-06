import { useLocation } from "react-router-dom";
const GameDetail = () => {
  let {
    state: { game, index },
  } = useLocation();

  return (
    <div className="searchContainer">
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <h3>Genre(s):</h3>
      {game.genres.map((games ) => `${games.name}`)}
      <h3>Platforms(s)</h3>
      {game.platforms.map((p ) => `${p.platform.name} | `)}
      <div>
        {game.short_screenshots.map((ss) => (
          <div>
            <img src={ss.image} alt="screenshot"></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GameDetail;
