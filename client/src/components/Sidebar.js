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
      <NavLink className="sBarMain" to="/">
        Home
      </NavLink>
      <NavLink className="sBarMain" to="/profile">
        Profile
      </NavLink>
      <NavLink className="sBarMain" to="/search">
        Search
      </NavLink>
      <h1 className="sBarMain platform">Platforms</h1>
      <NavLink to="games/pc">
        PC <img className="sidebarlogos" src={pclogo} />
      </NavLink>
      <NavLink to="games/playstation">
        Playstation
        <img className="sidebarlogos" src={playstationlogo} />{" "}
      </NavLink>
      <NavLink to="games/xbox">
        Xbox <img className="sidebarlogos" src={xboxlogo} />
      </NavLink>
      <NavLink to="games/nintendo-switch">
        Nintendo Switch <img className="sidebarlogos" src={nSwitchlogo} />
      </NavLink>
    </div>
  );
}

export default Sidebar;
