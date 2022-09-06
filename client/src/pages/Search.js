import {useState} from 'react';
import Results from '../components/Results'



const Search = () => {
    const [search, setSearch] = useState("")
    const [gameResults, setGameResults] = useState("")


const handleChange = (event) => {
    setSearch(event.target.value)
}

const onSubmit = (event) => {
    event.preventDefault()
    let searchedGame = search.split(' ').join('-').toLowerCase()

    setGameResults( [] )
    fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${searchedGame}`)
    .then(res => res.json())
    .then(({results}) => {
        results === undefined ? alert('no games found') : setGameResults(results)
        console.log(results)
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
            

            
        </div>
    );
}


export default Search; 