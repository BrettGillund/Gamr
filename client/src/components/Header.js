import { NavLink} from 'react-router-dom';
import logo from '../images/GAMRx10.png'

function Header() {
  return (
    <header>
        <img id="logoPic" src={logo} alt="logo" />
         <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/auth-form">Register/Login</NavLink>
        </nav>
    </header>
  )
}

export default Header