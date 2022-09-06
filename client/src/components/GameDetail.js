const GameDetail = (props) => {
    const { game } = props.location.gameProps


    return (
        <div>
            <h1>{game.name}</h1>
            <p>Released: {game.released}</p>
        </div>
    )

}
export default GameDetail