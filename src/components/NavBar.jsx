import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        {!token ? (
          <>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <li>Register</li>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li>Login</li>
            </Link>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }} onClick={logOut}>
            <li>Logout</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
