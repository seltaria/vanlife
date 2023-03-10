import React from "react";
import { Await, defer, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";

export function loader({ params }) {
  return defer({ van: getHostVans(params.id) })
}

export function VansHostLayout() {

  const vanData = useLoaderData();

  return (
    <div className="container van-host-detail-container">
      <Link className="van-detail-back" to=".." relative="path">&larr; Back to all vans</Link>
      <React.Suspense fallback={<h2>Loading van information...</h2>}>
        <Await resolve={vanData.van}>
          {(van) => (
            <div className="van-host-detail">
              <div className="van-host-detail-block">
                <img src={van.imageUrl} alt={van.name} />
                <div>
                  <div className={`van-type ${van.type}`}>{van.type}</div>
                  <h2>{van.name}</h2>
                  <div><b>${van.price}</b>/day</div>
                </div>
              </div>
              <nav>
                <NavLink to="." end className={({ isActive }) => isActive ? "active-link" : null}>Details</NavLink>
                <NavLink to="pricing" className={({ isActive }) => isActive ? "active-link" : null}>Pricing</NavLink>
                <NavLink to="photos" className={({ isActive }) => isActive ? "active-link" : null}>Photos</NavLink>
              </nav>
              <Outlet context={{ van }} />
            </div>
          )}
        </Await>
      </React.Suspense>
    </div>
  )
}