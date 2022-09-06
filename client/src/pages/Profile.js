import { useQuery } from "@apollo/client";
import { PROFILE_QUERY } from "../utils/queries";

function Profile() {
  const { loading, error, data } = useQuery(PROFILE_QUERY);

  return (
    <div className="profile">
      {error && <p className="error">{error.message}</p>}

      {loading && <p>Loading user profile...</p>}

      {data && !data.getUsers.length && <p>No profile data to load.</p>}

      {data && (
        <span>
          {data.getUsers.map((user) => (
            <h3 key={user._id}>{user.gamerTag}</h3>
          ))}
        </span>
      )}
      {/* <div className="profContainer">
        <div>
          <img src="dummy.jpg" height={200} width={200}></img>
        </div>
        <div>
          <h3 className="usernameStyle">Dummy username1</h3>
          <h3 className="usernameStyle">Dummy username1</h3>
          <h3 className="usernameStyle">Dummy username1</h3>
        </div>
      </div>
      <div className="savedGames">
        <h2>Saved Games</h2>
      </div> */}
    </div>
  );
}

export default Profile;
