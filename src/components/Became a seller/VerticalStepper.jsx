import React, { useEffect, useRef, useState } from "react";
import "./VerticalStepper.css";

// Step data (customize as needed)
const steps = [
  {
    title: "Create Account",
    desc: "Create an account and log in as a seller.",
    icon: "👤",
  },
  {
    title: "List Products",
    desc: "Once logged in, list your product catalog in the Supplier panel.",
    icon: "📦",
  },
  {
    title: "Get Orders",
    desc: "Once you receive orders, keep the dispatch of the ordered product ready.",
    icon: "🛒",
  },
  {
    title: "Hassle Free Logistics",
    desc: "Once the product is ready to dispatch, Strancesteel will assign a vehicle for delivery.",
    icon: "🚚",
  },
  {
    title: "Payment Settlement Payments",
    desc: "Within 7 days of delivery, payment will be directly credited to the seller's account.",
    icon: "💰",
  },
];

function VerticalStepper() {
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  // On scroll: find which step is closest to the center of viewport
  useEffect(() => {
    const handleScroll = () => {
      const offsets = stepRefs.current.map(
        (ref) =>
          ref
            ? Math.abs(
                ref.getBoundingClientRect().top + ref.offsetHeight / 2 - window.innerHeight / 2
              )
            : Number.MAX_VALUE
      );
      const minIndex = offsets.indexOf(Math.min(...offsets));
      setActiveStep(minIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="vstepper-root">
      <h2 className="vstepper-title">How to sell on Strancesteel?</h2>
      <p className="vstepper-desc">
        <b>Mechanics of the Seller Process:</b> A Step-by-Step Guide.
      </p>
      <div className="vstepper-timeline">
        <div className="vstepper-line">
          <div
            className="vstepper-red-dot"
            style={{
              top: `calc(${(activeStep / (steps.length - 1)) * 100}% - 12px)`,
              transition: "top 0.4s cubic-bezier(.7,.25,.29,1.09)",
            }}
            aria-label="Scroll progress marker"
          />
        </div>
        <div className="vstepper-steps">
          {steps.map((step, i) => (
            <div
              className={`vstepper-step${activeStep === i ? " active" : ""}`}
              key={step.title}
              ref={el => (stepRefs.current[i] = el)}
            >
              <span className="vstepper-icon">{step.icon}</span>
              <div className="vstepper-step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VerticalStepper;
