import { ADD_GAME } from "../utils/mutations"
import {useState} from 'react';
import { useMutation } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import { PROFILE_QUERY } from "../utils/queries";


function GameForm(props) {
    // console.log("game form is hittin");
    // console.log(props);
    const [formInput, setFormInput] = useState("");
    const [addGame, {loading, error, data}] = useMutation(ADD_GAME)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addGame({
            variables: {
                game: formInput,
                user: props._id
            },
            refetchQueries: [PROFILE_QUERY]
        })
        setFormInput('')
        navigate('/profile')
    };

  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
        <h1>Add Game to your Library</h1>
      <input
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        type="text"
        placeholder="Add game to your library"/>
        <button>Submit</button>
    </form>
  );
}

export default GameForm 