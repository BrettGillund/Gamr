import { useQuery } from "@apollo/client";
import { PROFILE_QUERY } from "../utils/queries";

import GameForm from "../components/GameForm";


function Profile() {
  const { loading, error, data } = useQuery(PROFILE_QUERY);
  let userInfo = JSON.parse(localStorage.getItem("user"));
  console.log(data);



  return (
    <div className="profile-main">
      <div>
        {error && <p className="error">{error.message}</p>}

        {loading && <p>Loading user profile...</p>}

        {data && (
          <span>
            {data.getUsers.map((user, index) => {
              if (userInfo.email === user.email) {
              let userLib = user.library
              console.log(userLib)
                return (
                  
                  <div key={index}>
                    <div>
                      <h3>{user.gamerTag}</h3>
                      <h3>{user.faveConsole}</h3>
                    <div className="gameList">

                      {user.library.map((game, index) => {
                        return (
                          <div  key={index}>
                            <h1>
                               {game.game}
                            </h1>

                          </div>
                        )
                      })}
                    </div>
                    
                    </div>

                    <GameForm {...user}/>
                  </div>
                );
              }
            })}
          </span>
        )}
      </div>
      <div>
      </div>
  </div>
  );
}
export default Profile;
