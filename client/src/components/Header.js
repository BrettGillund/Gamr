import { NavLink} from 'react-router-dom';
import logo from '../images/GAMRx10.png'


function Header(props) {
  return (
    <header>
      <h3>{props.logo}</h3>
      <nav>
        {props.user ? (
          <>
            <img id="logoPic" src={logo} alt="logo" />
            <span>Welcome, {props.user.email}</span>
            <NavLink to="/">Home</NavLink>
          </>
        ) : (
          <>
            <img id="logoPic" src={logo} alt="logo" />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/auth-form">Register/Login</NavLink>
          </>
        )}

      </nav>
    </header>
  )
}

export default Header;

