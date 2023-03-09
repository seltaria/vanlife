import React from "react";
import { Link } from "react-router-dom";

export function VansHost() {

  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.map(el => {
    return (
      <Link to={el.id} className="van-host-card">
        <img src={el.imageUrl} alt={el.name} />
        <div>
          <h3>{el.name}</h3>
          <div>${el.price}</div>
        </div>
      </Link>
    )
  })

  return (
    <div>
      <div className="container">
        <h2>Your listed vans</h2>
        <ul className="van-host-list">{vanElements}</ul>
      </div>
    </div>
  )
}
