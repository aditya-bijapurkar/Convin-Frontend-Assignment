import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const Header = () => {
  return (
    <header>
      <h1>Youtube Video Player Application</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Available videos
        </NavLink>
        <br />
        <NavLink to="/add" className="link" activeClassName="active">
          Add new video
        </NavLink>
        <br />
        <NavLink to="/past" className="link" activeClassName="active">
          Check Watching History
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
