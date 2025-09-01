import React from "react";
import "./strancesteelinnovation.css";

// Image: replace with your real phone/SVG asset or screenshot exported from Figma
const phoneMockup = "/assets/innovation-phone.png"; // <-- set your own path

export default function StrancesteelInnovation() {
  return (
    <section className="strancesteel-innovation">
      <div className="strancesteel-innovation-row">
        <div className="strancesteel-innovation-art">
          <img src={phoneMockup} alt="Strancesteel App on Mobile" />
        </div>
        <div className="strancesteel-innovation-content">
          <h2>
            <span className="strancesteel-innovation-title">Innovation for a Change</span>
          </h2>
          <p>
            Strancesteel recognizes the longstanding tradition of purchasing steel offline, a common practice for both buyers and sellers. However, this conventional approach hinders growth and limits potential opportunities in today's fast-paced world. As witnessed in various industries, innovation and technological advancements have led to remarkable outcomes. At the forefront of this technological revolution, "Strancesteel" is pioneering a groundbreaking solution that propels the steel industry forward, embracing a new and highly efficient way of buying and selling steel.
          </p>
        </div>
      </div>
    </section>
  );
}
