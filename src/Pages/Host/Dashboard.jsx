import React from "react";
import { Link } from "react-router-dom";

export function Dashboard() {

  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.slice(0, 2).map(el => {
    return (
      <Link to={`vans/${el.id}`} className="van-host-card dashboard-van">
        <img src={el.imageUrl} alt={el.name} />
        <div>
          <h3>{el.name}</h3>
          <div>${el.price}</div>
        </div>
      </Link>
    )
  })

  return (
    <div className="dashboard">
      <div className="dashboard-welcome">
        <div className="container">
          <h2>Welcome!</h2>
          <div>Income last <b><u>30 days</u></b></div>
          <div className="dashboard-welcome-income">$2,260</div>
        </div>
      </div>
      <div className="dashboard-score">
        <div className="container">
          <div><b>Review score</b> <img style={{ transform: "translate(0, 4px)" }} src="./../img/star.png" alt="star" /> <b>5.0</b>/5</div>
        </div>
      </div>
      <div className="dashboard-vanlist container">
        <div className="dashboard-vans">
          <h3>Your listed vans</h3>
          <Link to="vans">View all</Link>
        </div>
        {vanElements}
      </div>
    </div>
  )
}
