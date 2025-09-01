import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">
          Embrace the <span className="hero-title-accent">Future of Steel Sales</span>,
          <br />
          Empower your <span className="hero-title-accent">business exponentially</span>
        </h1>
        <p className="hero-subtitle">
          Your Selling Partner, from Listing to Delivery
        </p>
        <div className="hero-actions">
          <button className="hero-btn primary">Register Now</button>
          <button className="hero-btn outline">Login</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/hero-illustration.png" alt="Marketplace illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
