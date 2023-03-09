import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export function HostLayout() {
  return (
    <>
      <nav className="container nav-container">
        <NavLink to="." end className={({ isActive }) => isActive ? "active-link" : null}>
          Dashboard
        </NavLink>
        <NavLink to="vans" className={({ isActive }) => isActive ? "active-link" : null}>
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}