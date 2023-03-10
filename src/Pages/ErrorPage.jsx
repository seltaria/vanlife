import React from "react";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <>
      <div className="container">
        <h2>Sorry, the page you were looking for was not found.</h2>
        <Link className="error-button" to="/vanlife">Return to home</Link>
      </div>
    </>
  )
}