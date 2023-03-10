import React from "react";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { Card } from "../Components/Card";
import { getVans } from "../api.js";

export function loader() {
  return defer({ vans: getVans() }); // value is a promise
}

export function Vans() {

  const [searchParams, setSearchParams] = useSearchParams();
  const vansPromise = useLoaderData();
  const typeFilter = searchParams.get("type");

  return (
    <section className="van">
      <div className="container van-container">
        <h2 className="van-title">Explore our van options</h2>

        <React.Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={vansPromise.vans}>
            {(vans) => {
              const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans;

              const vanElements = displayedVans.map(van =>
                <Card
                  key={van.id}
                  id={van.id}
                  name={van.name}
                  price={van.price}
                  description={van.description}
                  type={van.type}
                  imageUrl={van.imageUrl}
                  typeFilter={typeFilter}
                  searchParams={searchParams} />)

              return (
                <>
                  <div className="van-filters">
                    <button className={`van-filter ${typeFilter === "simple" ? "selected" : null}`}
                      onClick={() => setSearchParams({ type: "simple" })}>
                      Simple </button>
                    <button className={`van-filter ${typeFilter === "luxury" ? "selected" : null}`}
                      onClick={() => setSearchParams({ type: "luxury" })}>
                      Luxury </button>
                    <button className={`van-filter ${typeFilter === "rugged" ? "selected" : null}`}
                      onClick={() => setSearchParams({ type: "rugged" })}>
                      Rugged </button>
                    {typeFilter && <button className="van-clear-filter"
                      onClick={() => setSearchParams({})}>
                      Clear filters</button>}
                  </div>
                  <ul className="van-list">{vanElements}</ul>
                </>
              )
            }}
          </Await>
        </React.Suspense>

      </div>
    </section >
  )
}