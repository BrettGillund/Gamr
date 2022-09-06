import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Route, Routes } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink id="sBarMain" to="/">
        Home
      </NavLink>
      <NavLink id="sBarMain" to="/profile">
        Profile
      </NavLink>
      <NavLink id="sBarMain" to="/search">
        Search
      </NavLink>
      <NavLink id="sBarMain" to="/games">
        Games
      </NavLink>
      <h1 id="sBarMain">Platforms</h1>
      <NavLink to="games/pc">PC</NavLink>
      <NavLink to="games/playstation">Playstation</NavLink>
      <NavLink to="games/xbox">Xbox</NavLink>
      <NavLink to="games/nintendo-switch">Nintendo Switch</NavLink>
    </div>
  );
}

export default Sidebar;
