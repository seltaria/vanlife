import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <nav className="nav">
          <Link className="logo" to="/">#VANLIFE</Link>
          <NavLink className={({ isActive }) => isActive ? "host-link active-link" : "host-link"} to="/host">
            Host
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "about-link active-link" : "about-link"} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "vans-link active-link" : "vans-link"} to="/vans">
            Vans
          </NavLink>
          <Link to="/login" style={{ marginLeft: "10px", width: "16px", transform: "translateY(2px)" }}>
            <img src="../../img/login.png" alt="login page" />
          </Link>
        </nav>
      </div>
    </header>
  )
}