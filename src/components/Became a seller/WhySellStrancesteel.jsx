import React from "react";
import "./WhySellStrancesteel.css";

const features = [
  {
    icon: (
      <span className="feature-icon audience">
        <span role="img" aria-label="audience">📈</span>
      </span>
    ),
    title: "Expand Buyer Audience",
    desc: "Access a wide network of buyers and maximize your sales potential."
  },
  {
    icon: (
      <span className="feature-icon payment">
        <span role="img" aria-label="payment">💸</span>
      </span>
    ),
    title: "Prompt Payment",
    desc: "Enjoy hassle-free transactions, credited to your bank account within 7 days of a successful transaction."
  },
  {
    icon: (
      <span className="feature-icon start">
        <span role="img" aria-label="start">☝️</span>
      </span>
    ),
    title: "Ease of starting",
    desc: "From product listing and getting orders to hassle-free delivery and returns management, Strancesteel has a solution for you."
  },
  {
    icon: (
      <span className="feature-icon manage">
        <span role="img" aria-label="manage">🤝</span>
      </span>
    ),
    title: "Manage your business on the go",
    desc: "With the Strancesteel App, you can manage your orders and respond – anytime, anywhere."
  },
];

function WhySellStrancesteel() {
  return (
    <section className="whysell">
      <h2 className="whysell-title">Why Sell Through Strancesteel?</h2>
      <p className="whysell-subtitle">
        Future of <b>steel commerce</b>, where innovation meets opportunity.
      </p>
      <div className="features-grid">
        {features.map((feature, i) => (
          <div className="feature-card" key={i}>
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhySellStrancesteel;
