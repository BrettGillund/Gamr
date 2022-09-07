import { useQuery } from "@apollo/client";
import { PROFILE_QUERY } from "../utils/queries";

// function Profile() {
// let userInfo = JSON.parse(localStorage.getItem('user'))

//     console.log(userInfo)

//     return (
//         <div className="game-container">
//             <div>
//                 <div className="game-card">
//                     <p></p>
//                     <p></p>
//                     <p></p>
//                 </div>
//             </div>

//         </div>

//     )
// }

function Profile() {
  const { getUsers } = useQuery(PROFILE_QUERY);
  // const { getUsers, email, gamerTag } = useQuery(PROFILE_QUERY);
  let userInfo = JSON.parse(localStorage.getItem("user"));

  // console.log(data)
  console.log(PROFILE_QUERY)
  // console.log(userInfo)



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


