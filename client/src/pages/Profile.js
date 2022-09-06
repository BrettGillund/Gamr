import { useQuery } from '@apollo/client';
import { PROFILE_QUERY } from '../utils/queries';


// function Profile() {
let userInfo = JSON.parse(localStorage.getItem('user'))

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
    const { loading, error, data } = useQuery(PROFILE_QUERY)
    let userInfo = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading user profile...</p>}

            {data && (
                <span>
                    {data.getUsers.map((user, index) => {
                        if(userInfo.email === user.email) {
                            return <div key={index}>
                            <h3>{user.gamerTag}</h3>
                            <h3>{user.faveConsole}</h3>
                            <h3>{user.library[0].game}</h3>
                            </div>
                        }
})}
                </span>
            )}
        </div>

    )
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

