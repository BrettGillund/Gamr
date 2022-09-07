import { useQuery } from '@apollo/client';
import { PROFILE_QUERY } from '../utils/queries';


function Users() {
    const { loading, error, data } = useQuery(PROFILE_QUERY)

    return(
        <div className="">
            {error && <p className="error">{error.message}</p>}

            {loading && <p>Loading user profiles...</p>}

            {data && !data.getUsers.length && <p>No users are currently signed up to Gamr!</p>}

            {data && (
                <span className='game-container'>
                    {data.getUsers.map((user,index) => {
                        return(
                            <div key={index} className="game-card">
                                <h3>User Email: {user.email}</h3>
                                <h3>Gamer Tag: {user.gamerTag}</h3>
                                <h3>Preferred Console: {user.faveConsole}</h3>
                                <h3>Favorite Games: {user.library.game}</h3>
                            </div>
                        )
                    })}
                </span>
            )}
        </div>
  )
}

export default Users;