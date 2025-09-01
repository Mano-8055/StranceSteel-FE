import React from "react";
import "./hashtagsteelempowering.css"; // Import the CSS file

// Sample SVG path data for state shapes. Replace with your SVGs or images as needed.
const states = [
  {
    name: "Karnataka",
    description: "Where Innovation Shapes the Future.",
    svg: (
      <svg viewBox="0 0 48 56" width="54" height="64" fill="#2636D9">
        {/* Example Karnataka shape, replace with accurate path */}
        <path d="M10 5 L43 20 L24 41 L12 30 Z" />
      </svg>
    ),
  },
  {
    name: "Tamil Nadu",
    description: "Where Industries Lead and Infrastructure Grows.",
    svg: (
      <svg viewBox="0 0 48 56" width="54" height="64" fill="#2636D9">
        {/* Example Tamil Nadu shape, replace with accurate path */}
        <path d="M30 6 L44 34 L14 50 L7 22 Z" />
      </svg>
    ),
  },
  {
    name: "Kerala",
    description: "Where Culture and Tradition Walk Hand in Hand.",
    svg: (
      <svg viewBox="0 0 24 60" width="30" height="70" fill="#2636D9">
        {/* Example Kerala shape, replace with accurate path */}
        <path d="M8 4 L20 27 L7 56 L3 33 Z" />
      </svg>
    ),
  },
];

export default function HashtagsteelEmpowering() {
  return (
    <section className="empowering-section">
      <h2 className="empowering-title">
        Hashtagsteel Empowering
        <div className="empowering-underline"></div>
      </h2>
      <div className="empowering-grid">
        {states.map((state) => (
          <div className="empowering-card" key={state.name}>
            <div className="empowering-map">{state.svg}</div>
            <div>
              <div className="empowering-state">{state.name}</div>
              <div className="empowering-desc">{state.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
