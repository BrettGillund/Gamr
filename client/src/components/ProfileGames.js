import {REMOVE_GAME} from "../utils/mutations"

import { useMutation } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import { PROFILE_QUERY } from "../utils/queries";



function ProfileGames(props) {
    
    // console.log(props.library)
    
    // const [gameId, setGameId] = useState('')
    const [removeGame, {loading, error, data}] = useMutation(REMOVE_GAME)

    const navigate = useNavigate();

    function handleDelete ( event ) {
        event.preventDefault()
        console.log( event.target.parentElement.getAttribute("data-id"))

        removeGame({
            variables: {
                gameId: event.target.parentElement.getAttribute("data-id")
            },
            refetchQueries: [PROFILE_QUERY]
        })
        navigate('/profile')

    }

    return (
     <div>
         {props.library.map( (game, index) => {
            //  console.log(game.game)
            // this is getting the library array stored to each users database.
            // mapping over the array
             return (

                 <div key={index} data-id={game._id} className="profile-game-card">
                   <button onClick={handleDelete}>Delete</button>
                   <br></br>
                   <span>{game.game}</span>
                 </div>

             );
         })}
     </div>

    )
}

export default ProfileGames