import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import gameScreenshot from "../images/gameSS.png";
import {Link} from "react-router-dom"

function Landing(props) {
  const [gameData, setGameData] = useState([]);
  const [upcomingGameData, setUpcomingGameData] = useState([]);

  const grabData = () => {
    fetch("/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGameData(data.results);
        console.log(data.results);
      });
  };

  const grabUpcomingGames = () => {
    fetch("/api/upcoming-releases")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingGameData(data.results);
        console.log(data.results);
      });
  };

  useEffect(grabData, []);
  useEffect(grabUpcomingGames, []);

  const divStyle = {
    height: "250px",
    width: "400px",
  };
  return (
    <Tabs className="tabStyling divider">
      <TabList>
        <Tab className="biggerText">Welcome to Gamr</Tab>
        <Tab className="biggerText">2022 Games of the Year!</Tab>
        <Tab className="biggerText">Upcoming Releases for 2023</Tab>
      </TabList>

      <TabPanels>
        <TabPanel className="landingPage">
          <div className="landingContainer">
            <h1 className="biggestText divider">
              Tired of adding all of your friend's usernames GAMR is here to
              help!
            </h1>
            <h1 className="biggerText">
              In this app you can register for an account and view all of your
              favorite games' information and save them to your Profile's
              Library. Also view other Users and their usernames to add them on
              whatever platform you wish.
            </h1>
          </div>
          <img src={gameScreenshot} className="landingContainerSS"></img>
          <div className="apiContainer">
            <h1 className="biggestText">
              Using the RAWG API, you can view game data, it's rating and more!
            </h1>
            <h1 className="biggerText">
              Check out when a video game released, platforms, genre
            </h1>
            <h1 className="biggerText">
              Add all of your gaming platform usernames to share with your
              friends all-in-one place
            </h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="centerText ">
            <div>
            <h1 className="biggestText">2022 Games of the Year</h1>
              <div className="game-container ">
                {gameData.map((game, index) => {
                  return (
                    <div key={index}>
                      <div className="game-card">
                        <Link
                          to={`/game/${game.name}`}
                          state={{ game: game }}
                        >
                        <img style={divStyle} src={game.background_image} />
                        </Link>
                        <p>{game.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="centerText ">
            <div>
              <h1 className="biggestText">Upcoming Releases for 2023</h1>
              <div className="game-container ">
                {upcomingGameData.map((game, index) => {
                  return (
                    <div key={index}>
                      <div className="game-card">
                      <Link
                          to={`/game/${game.name}`}
                          state={{ game: game }}
                        >
                        <img style={divStyle} src={game.background_image} />
                        </Link>
                        <p>{game.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Landing;
