import React from "react";
import { useOutletContext } from "react-router-dom";

export function VansHostDetail() {

  const { van } = useOutletContext();

  return (
    <div className="van-host-detail-text">
      <div><b>Name:</b> {van.name}</div>
      <div><b>Category:</b> {van.type}</div>
      <div><b>Description:</b> {van.description}</div>
    </div>
  )
}