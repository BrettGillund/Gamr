import { useQuery } from "@apollo/client";
import { PROFILE_QUERY } from "../utils/queries";


function Profile() {
  const { loading, error, data } = useQuery(PROFILE_QUERY);
  let userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="centerProf">
      {error && <p className="error">{error.message}</p>}

      {loading && <p>Loading user profile...</p>}

      {data && (
        <div className="profContainer">
        <form >
          {data.getUsers.map((user, index) => {
            if(user.gamerTag !== null) {
              var tag = `Gamer Tag: ${user.gamerTag}`
            } else {
              var tag = (
              <input className="profInput" placeholder ="Enter your username/gamertag!"></input>)
              var submit1 = (<button className="biggerText btnStyle">ENTER</button>)
            }
            if(user.faveConsole !== null) {
              var console = `Prefered Console: ${user.faveConsole}`
              var submit = ''
            } else {
              var console = (
              <input className="profInput" placeholder ="Enter your prefered console/platform!"></input>)
              var submit = (<button className="biggerText btnStyle">ENTER</button>)
            }
            if (userInfo.email === user.email) {
              return (
                <div key={index} className="profileContainer">
                  <h3>{tag} {submit1}</h3>
                  <h3>{console} {submit}</h3>
                  {/* <h3>Fav Game: {user.library[0].game}</h3> */}
                </div>
              );
            }
          })}
        </form>
        </div>
      )}
    </div>
  );
}

// function Profile(props) {
//     const { user } = this.props;
//     return(
//         <div>
//             <h1>{user.email}</h1>
//             {/* <h3>{props.user.faveConsole}</h3> */}
//         </div>
//     )
// }

export default Profile;


{/* <div>
{error && <p className="error">{error.message}</p>}

{loading && <p>Loading user profile...</p>}

{data && (
  <span className="profContainer profile">
    {data.getUsers.map((user, index) => {
      if(userInfo.email === user.email && userInfo.gamerTag === false) {
        console.log('yes I am false')
        return(<input>Please enter your gamer tag</input>)
      } else {
        return(<h3>Gamer Tag: {userInfo.gamerTag}</h3>)
      }
      if (userInfo.email === user.email) {
        return (
          <div key={index} className="profile">
            <h3>Gamer Tag: {user.gamerTag}</h3>
            <h3>Prefered Console: {user.faveConsole}</h3>
            {/* <h3>Fav Game: {user.library[0].game}</h3> */}
          // </div> */}