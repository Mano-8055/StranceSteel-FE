import React from "react";
import "./StrancesteelEdge.css";

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 36V24L20 28L28 16L36 24" stroke="#E14229" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V36H36" stroke="#E14229" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Accessibility",
    desc: "We connect you to a gamut of verified sellers surpassing the limitations of offline shopping with limited seller access."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="19" stroke="#E14229" strokeWidth="3" fill="none"/>
        <circle cx="24" cy="20" r="4" stroke="#E14229" strokeWidth="2.2" fill="none"/>
        <path d="M24 24V34" stroke="#E14229" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="24" cy="34" r="2" fill="#E14229"/>
      </svg>
    ),
    title: "Transparency",
    desc: "Our solution brings transparency to the closed environment of the steel market, offering buyers and sellers a technology-enabled platform for seamless steel transactions."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="21" cy="21" r="13" stroke="#E14229" strokeWidth="3"/>
        <path d="M33 33L42 42" stroke="#E14229" strokeWidth="3" strokeLinecap="round"/>
        <path d="M15 27V23H19V19H23V15" stroke="#E14229" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    title: "Growth",
    desc: "Our e-commerce platform fuels exponential growth for buyers and sellers, boosting visibility, expanding reach, and driving increased sales."
  }
];

export default function StrancesteelEdge() {
  return (
    <section className="strancesteel-edge-section">
      <h2 className="strancesteel-edge-title">
        Strancesteel Edge
        <div className="strancesteel-edge-underline"></div>
      </h2>
      <div className="strancesteel-edge-grid">
        {features.map((item) => (
          <div className="strancesteel-edge-card" key={item.title}>
            <div className="strancesteel-edge-icon">{item.icon}</div>
            <div className="strancesteel-edge-card-title">{item.title}</div>
            <div className="strancesteel-edge-card-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
