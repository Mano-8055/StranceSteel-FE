import React from "react";
import "./RegisterHero.css";

function RegisterHero() {
  return (
    <section className="register-hero">
      <div className="register-hero-content">
        <h1 className="register-hero-title">
          Start Skyrocketing your <span>Sales Today!</span>
        </h1>
        <p className="register-hero-subtitle">
          Join our Seller Community; expand your Selling Potential
        </p>
        <a href="#register" className="register-hero-btn">Register Now</a>
        <p className="register-hero-footnote">
          Start Selling <span>(It takes only 15 minutes to setup your account)</span>
        </p>
      </div>
      <div className="register-hero-image">
        <img src="/images/laptop-register.png" alt="Laptop with Registration Illustration" />
      </div>
    </section>
  );
}

export default RegisterHero;
