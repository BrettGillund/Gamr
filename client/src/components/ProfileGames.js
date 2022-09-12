function ProfileGames(props) {
    console.log(props.library[0].game)

    return (
     <div>
         {props.library.map( (game, index) => {
            //  console.log(game.game)
            // this is getting the library array stored to each users database.
            // mapping over the array
             return(
                 <div key={index}>
                     
                     <div className="profile-game-card">
                        <button>Delete </button><br></br>
                         <span>{game.game}</span>
                     </div>
                 </div>
             )
         })}
     </div>

    )
}

export default ProfileGames