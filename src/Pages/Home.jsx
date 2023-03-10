import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <div className="container home-container">
        <h2 className="home-title">You got the traver plans, we got the travel vans.</h2>
        <p className="home-text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="/vanlife/vans" className="home-button">Find your van</Link>
      </div>
    </div>
  )
}
