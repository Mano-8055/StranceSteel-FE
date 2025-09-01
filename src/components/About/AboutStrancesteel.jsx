import React from "react";
import "./aboutstrancesteel.css";

// Update this path to your actual illustration/image
const artwork = "../assets/hashtagsteel-artwork.png";

export default function AboutHashtagsteel() {
  return (
    <section className="hashtagsteel-about">
      <div className="hashtagsteel-row">
        <div className="hashtagsteel-info">
          <h2>
            About{" "}
            <span className="hashtagsteel-title-emph">our Hashtagsteel</span>
          </h2>
          <p>
            Hashtagsteel is a revolutionary e-commerce platform that aims to empower India’s Retail steel market. Our mission is to simplify the steel procurement process and provide an unparalleled experience for buyers and sellers across the nation.
          </p>
          <p>
            In the ever-evolving steel industry, convenience and transparency are the key. At Hashtagsteel, we connect buyers with a verified network of sellers, ensuring transparent pricing and impeccable quality that meets industry standards. Through our platform, buyers can compare comprehensive pricing, enabling them to make well-informed decisions. We envision a trusted online e-commerce platform aiming to exemplify the steel market.
          </p>
          <a className="hashtagsteel-cta" href="#">
            Join us on this exciting journey!
          </a>
        </div>
        <div className="hashtagsteel-art">
          <img src={artwork} alt="Hashtagsteel e-commerce illustration" />
        </div>
      </div>
    </section>
  );
}
