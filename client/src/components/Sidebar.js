import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import pclogo from "../images/tower-pc.png";
import playstationlogo from "../images/playstation.png";
import xboxlogo from "../images/xbox.png";
import nSwitchlogo from "../images/nintendo-switch.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink className="sBarMain divider" to="/">
        Home
      </NavLink>

      <NavLink className="sBarMain divider" to="/profile">
        Profile
      </NavLink>

      <NavLink className="sBarMain divider" to="/search">
        Search
      </NavLink>

      <h1 className="sBarMain divider">Platforms</h1>

      <div className="sBarPlatforms divider">
        <NavLink to="games/pc">
          PC 
        </NavLink>
        <img
            className="sidebarlogos"
            src={pclogo}
            alt="pc logo"
          />
      </div>
      <div className="sBarPlatforms divider">
        <NavLink to="games/playstation">
          Playstation
        </NavLink>
        <img
            className="sidebarlogos"
            src={playstationlogo}
            alt="playstation logo"
          />
      </div>
      <div className="sBarPlatforms divider">
        <NavLink to="games/xbox">
          Xbox 
        </NavLink>
        <img className="sidebarlogos" src={xboxlogo} alt="xbox logo" />
      </div>
      <div className="sBarPlatforms divider">
        <NavLink to="games/nintendo-switch">Nintendo Switch</NavLink>
        <img
          className="sidebarlogos"
          src={nSwitchlogo}
          alt="nintendo switch logo"
        />
      </div>
    </div>
  );
}

export default Sidebar;
