import React from "react";
import { Await, defer, Link, useLoaderData, useLocation } from "react-router-dom";
import { getHostVans } from "../api";

export function loader({ params }) {
  return defer({ van: getHostVans(params.id) })
}

export function VanDetail() {

  const location = useLocation();
  const vanData = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <section className="van-detail">
      <div className="container">
        <Link to={`..?${search}`} relative="path" className="van-detail-back">
          &larr; Back to {type} vans
        </Link>
        <React.Suspense fallback={<h2>Loading van information...</h2>}>
          <Await resolve={vanData.van}>
            {(van) => (
              <>
                <img src={van.imageUrl} alt={van.name} />
                <div className={`van-type ${van.type}`}>{van.type}</div>
                <h2>{van.name}</h2>
                <div className="van-detail-price">${van.price}<span>/day</span></div>
                <div className="van-detail-text">{van.description}</div>
                <button>Rent this van</button>
              </>
            )
            }

          </Await>
        </React.Suspense>
      </div>
    </section>
  )
}