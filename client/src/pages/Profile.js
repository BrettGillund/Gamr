import {
    useQuery,
    gql
} from '@apollo/client'

const PROFILE_QUERY = gql`
query getProfile{
    getProfile{
        _id
        game
        console
        gamerTag
    }
}
`

function Profile() {
    const { loading, error, data } = useQuery(PROFILE_QUERY)

    return(
        <div>
            {error ? <p>{error}</p> : loading ? <p>Loading user profile...</p> : (
                <span>
                    {data}
                    <h3></h3>
                    <h3></h3>
                    <h3></h3>
                </span>
            )}
        </div>
    )
}

export default Profile