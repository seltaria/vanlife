import React from "react";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { Card } from "../Components/Card";
import { getVans } from "../api.js";

export function loader() {
  return getVans();
}

export function Vans() {

  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");
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
    <section className="van">
      <div className="container van-container">
        <h2 className="van-title">Explore our van options</h2>
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
      </div>
    </section>
  )
}