import React from "react";
import { useRouteError } from "react-router-dom";

export function Error() {

  const error = useRouteError();

  return (
    <>
      <div className="container">
        <h2>An error occured!</h2>
        <div>{error.message}</div>
      </div>
    </>
  )
}