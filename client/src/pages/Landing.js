function Landing(props) {
  return (
    <div>
        <h1>Welcome {props.user ? props.user.email : 'Guest'}!</h1>
    </div>
  )
}

export default Landing;