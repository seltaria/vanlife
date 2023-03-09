import React from "react";
import { useOutletContext } from "react-router-dom";

export function VansHostPhotos() {

  const { van } = useOutletContext();

  return (
    <div className="van-host-detail-photos">
      <img src={van.imageUrl} alt={van.name} />
    </div>
  )
}