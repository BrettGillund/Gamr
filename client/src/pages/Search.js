import {useState} from 'react';
import Results from '../components/Results'



const Search = () => {
    const [search, setSearch] = useState("")
    const [gameResults, setGameResults] = useState([])


const handleChange = (event) => {
    setSearch(event.target.value)
}

const onSubmit = (event) => {
    event.preventDefault()
    let searchedGame = search.split(' ').join('-').toLowerCase()

    setGameResults( [] )
    console.log("about to fetch ")
    fetch(`https://api.rawg.io/api/games?key=d31a399eba4e4877b85fe959ca635232&search=${searchedGame}`)
    .then(res => res.json())
    .then(({results}) => {
       var error = results === undefined ? alert('no games found') : setGameResults(results)
        console.log(error)
        // results will be sent as a prop to the Results.js in the components folder.
    })
    setSearch("")
}

    return (
        <div className='game-search'>
            <h1>Game Search</h1>
            <form onSubmit={onSubmit}>
            <input type="text" value={search} onChange={handleChange}/>
                <br></br>
                <input type="submit"/>
            </form>
            <Results gameResults = {gameResults}/>
        </div>
    );
}


export default Search; 