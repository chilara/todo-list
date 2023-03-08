import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <li>Register</li>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
