function Profile(props) {
    
    const currentUser = JSON.stringify(props.user.gamerTag)

    return(
        <div>
                    <h3>{currentUser}</h3>
        </div>

  )
}

export default Profile;

