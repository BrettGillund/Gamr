import { useQuery } from '@apollo/client';
import { PROFILE_QUERY } from '../utils/queries';


function Profile() {
    const { loading, error, data } = useQuery(PROFILE_QUERY)

    return(
        <div>
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading user profile...</p>}

            {data && !data.getUsers.length && <p>No profile data to load.</p>}

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

export default Profile;
