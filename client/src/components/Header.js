import { NavLink } from "react-router-dom";
import logo from "../images/GAMRx10.png";

function Header(props) {
  return (
    <header >
      {props.user ? (
        <nav id="navStyle">
          <img id="logoPic" src={logo} alt="logo" />
          <span className="centerText">Welcome, {props.user.email}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/logout">Log Out</NavLink>
          </span>
        </nav>
      ) : (
        <nav id="navStyle">
          <img id="logoPic" src={logo} alt="logo" />
          <div className="centerText">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/auth-form">Register/Login</NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
