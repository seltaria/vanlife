import React from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";

export function loader() {
  return defer({ vans: getHostVans() });
}

export function VansHost() {

  const vansPromise = useLoaderData();

  return (
    <div>
      <div className="container">
        <h2>Your listed vans</h2>
        <React.Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={vansPromise.vans}>
            {(vans) => {

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
                <ul className="van-host-list">{vanElements}</ul>
              )
            }}
          </Await>
        </React.Suspense>
      </div>
    </div>
  )
}
