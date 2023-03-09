import React from "react";
import { useOutletContext } from "react-router-dom";

export function VansHostPricing() {

  const { van } = useOutletContext();

  return (
    <div><b>${van.price}</b>/day</div>
  )
}