import { useLocation } from "react-router-dom";
const GameDetail = () => {
  let {
    state: { game },
  } = useLocation();

  return (
    <div className="searchedGame">
      <div className="searchGameName biggestText divider">
        <h1>{game.name}</h1>
      </div>
      <div>
        <div className="searchGameInfo">
          <h1 className="divider">Game Information</h1>
          <p>Release Date: {game.released}</p>
          <p>Game Rating: {game.rating}</p>
          <p>Genre(s): {game.genres.map((games) => `${games.name}`)}</p>
          <p>
            Platforms(s) {game.platforms.map((p) => `${p.platform.name} | `)}
          </p>
        </div>
      </div>

      <div className="gameScreenshots">
        {game.short_screenshots.map((ss) => (
          <img src={ss.image} alt="screenshot" />
        ))}
      </div>
    </div>
  );
};
export default GameDetail;
