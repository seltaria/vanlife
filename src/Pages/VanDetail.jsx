import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export function VanDetail() {

  const params = useParams();
  const [van, setVan] = React.useState(null);

  const location = useLocation();

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <section className="van-detail">
      {van ? (
        <div className="container">
          <Link to={`..?${search}`} relative="path" className="van-detail-back">
            &larr; Back to {type} vans
          </Link>
          <img src={van.imageUrl} alt={van.name} />
          <div className={`van-type ${van.type}`}>{van.type}</div>
          <h2>{van.name}</h2>
          <div className="van-detail-price">${van.price}<span>/day</span></div>
          <div className="van-detail-text">{van.description}</div>
          <button>Rent this van</button>
        </div>
      ) : <div className="container"><h2>Loading...</h2></div>}
    </section>
  )
}