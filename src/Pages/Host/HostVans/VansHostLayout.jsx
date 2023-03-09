import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export function VansHostLayout() {

  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id])

  return (
    <>
      {van ? <div className="container van-host-detail-container">
        <Link className="van-detail-back" to=".." relative="path">&larr; Back to all vans</Link>
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
      </div> : <div className="container"><h2>Loading...</h2></div>}
    </>
  )
}