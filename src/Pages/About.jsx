import React from "react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <section className="about">
      <div className="about-img"></div>
      <div className="container about-container">
        <div className="about-text">
          <h2 className="about-title">Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
          <p>(Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="about-block">
          <div className="about-block-text">Your destination is waiting. Your van is ready.</div>
          <Link className="about-explore" to="/vans">Explore our vans</Link>
        </div>
      </div>
    </section>
  )
}