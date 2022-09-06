import { useQuery } from '@apollo/client';
import { PROFILE_QUERY } from '../utils/queries';


function Profile(props) {
    const { loading, error, data } = useQuery(PROFILE_QUERY)

    return(
        <div>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading user profile...</p>}

            {data && (
                <span>
                    {data.getUsers.map(user => (
                    <h3 key={user._id}>{user.gamerTag}</h3>
                    ))}
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

