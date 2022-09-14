import { ADD_GAME } from "../utils/mutations"
import {useState} from 'react';
import { useMutation } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import { PROFILE_QUERY } from "../utils/queries";
import Results from "../components/Results"


function GameForm(props) {
    // console.log("game form is hittin");
    // console.log(props);
    const [formInput, setFormInput] = useState("");
    const [addGame, {loading, error, data}] = useMutation(ADD_GAME)
    const [gameResults, setGameResults] = useState('')
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
        displayGames()
    };

    const displayGames = () => {
      setGameResults( [] )
      console.log("fetching api from the profile page")
      fetch(`https://api.rawg.io/api/games?key=d31a399eba4e4877b85fe959ca635232&search=${formInput}`)
      .then(res => res.json())
      .then(({results}) => {
        console.log(results)
         var error = results === undefined ? alert('no games found') : setGameResults(results)
          console.log(error)
          // results will be sent as a prop to the Results.js in the components folder.
      })
    }

  return (

    <div>

    <form className="add-game-form" onSubmit={handleSubmit}>
        <h1>Add Game to your Library</h1>
      <input

    <form className="" onSubmit={handleSubmit}>
        <h1 className="whiteText biggestText">Add Game to your Library</h1>
      <input className="profInput"

        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        type="text"
        placeholder="Add game to your library"/>
        <button className="biggerText btnStyle">Submit</button>
    </form>
    <Results gameResults = {gameResults} />
    </div>
  );
}

export default GameForm 