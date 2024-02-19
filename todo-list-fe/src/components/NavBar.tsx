import React from "react";
import { Link } from "react-router-dom";
import { AppHeader } from "@passfort/castle";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
