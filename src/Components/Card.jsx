import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <Link to={props.id} state={{ search: props.searchParams.toString(), type: props.typeFilter }}>
      <li className="van-card">
        <img className="van-img" src={props.imageUrl} alt={props.name} />
        <div>
          <h3 className="van-title">{props.name}</h3>
          <div className="van-price">${props.price}<span>/day</span></div>
          <div className={`van-type ${props.type}`}>{props.type}</div>
        </div>
      </li>
    </Link>
  )
}