import React from "react";
import "./stepssection.css";
import register from "../assets/Images/Register.png";
import placeorder from "../assets/Images/Placeorder.png";
import payments from "../assets/Images/Payments.png";

function StepsSection() {
  const steps = [
    {
      image: register,
      title: "Register",
      description:
        "Join the future of steel procurement. Our step-by-step tutorial video will guide you through setting up your account in minutes.",
      videoLink: "#"
    },
    {
      image: placeorder,
      title: "Place Your Order",
      description:
        "Buy steel the smart way. Learn how to browse, compare and place your order effortlessly with this simple video tutorial.",
      videoLink: "#"
    },
    {
      image: payments,
      title: "Payment Methods",
      description:
        "Make secure and easy payments. Explore various options like UPI, Cards, NetBanking and Online methods with this tutorial video.",
      videoLink: "#"
    }
  ];

  return (
    <section className="steps-section">
      <h2>Start Buying in Simple Steps</h2>
      <div className="underline"></div>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <img src={step.image} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <a href={step.videoLink} className="watch-video">
              ▶ Watch Video
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
