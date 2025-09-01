import React, { useState, useEffect } from "react";
import "./RotatingCircleImage.css";

// Example data: replace with your actual image URLs and names
const people = [
  {
    name: "Pranav Agarwal",
    img: "/profiles/pranav.png",
  },
  {
    name: "Roshni Gupta",
    img: "/profiles/roshni.png",
  },
  {
    name: "Rahul Sharma",
    img: "/profiles/rahul.png",
  },
  {
    name: "Meera Iyer",
    img: "/profiles/meera.png",
  },
  {
    name: "Sahil Kapoor",
    img: "/profiles/sahil.png",
  },
  {
    name: "Vijay Kumar",
    img: "/profiles/vijay.png",
  },
];

export default function RotatingCircleImage() {
  // Which person (index) is currently in the center
  const [current, setCurrent] = useState(0);
  const N = people.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % N);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [N]);

  // Main render
  return (
    <div className="circle-slider-outer">
      <div
        className="circle-slider-rotator"
        style={{
          transform: `rotate(-${current * (360 / N)}deg)`,
          transition: "transform 1s cubic-bezier(.6,1.4,.6,1)",
        }}
      >
        {people.map((p, i) => {
          // Place each image around the circle
          const angle = (360 / N) * i;
          return (
            <div
              key={p.name}
              className="circle-slider-thumb"
              style={{
                transform: `rotate(${angle}deg) translate(115px) rotate(-${angle}deg)`,
                // The last rotation un-tilts the image
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                className={`circle-slider-img ${
                  i === current ? "active" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
      {/* Center circle with current person's image + name */}
      <div className="circle-slider-center">
        <img src={people[current].img} alt={people[current].name} className="circle-slider-main-img" />
        <div className="circle-slider-name">{people[current].name}</div>
      </div>
    </div>
  );
}
