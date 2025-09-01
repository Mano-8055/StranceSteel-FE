import React from "react";
import "./StrancesteelBuyerHero.css";

export default function StrancesteelBuyerHero() {
  return (
    <section className="buyer-hero-section">
      <div className="buyer-hero-left">
        <h2 className="buyer-hero-title">
          Register as <span className="buyer-hero-brand">Strancesteel Buyer</span>
        </h2>
        <p className="buyer-hero-desc">
          Embrace efficiency, Unlock unparalleled opportunities - redefine your business success!
        </p>
        <button className="buyer-hero-action">Register Now</button>
      </div>
      <div className="buyer-hero-right">
        {/* Replace with your SVG illustration or an img if you have one */}
        <svg
          className="buyer-hero-illustration"
          width="340"
          height="230"
          viewBox="0 0 340 230"
          fill="none"
        >
          {/* Desk */}
          <rect x="138" y="81" width="120" height="82" rx="7.5" fill="#3f51e3"/>
          <rect x="148" y="104" width="100" height="56" rx="5" fill="#fff"/>
          {/* Monitor */}
          <rect x="195" y="66" width="70" height="47" rx="5" fill="#fff"/>
          <rect x="210" y="81" width="40" height="8" rx="3" fill="#e6e9fa"/>
          {/* Signup form highlight */}
          <rect x="216" y="93" width="29" height="6" rx="2" fill="#2636d9" opacity="0.25"/>
          {/* Person */}
          <ellipse cx="247" cy="123" rx="14" ry="14" fill="#2636d9"/>
          <rect x="240" y="137" width="15" height="38" rx="7" fill="#1a2458"/>
          <rect x="252" y="141" width="25" height="7" rx="3" fill="#4257ea" transform="rotate(17 264 145)"/>
          {/* Plants left & right */}
          <rect x="150" y="150" width="11" height="37" rx="4.5" fill="#2636d9"/>
          <ellipse cx="174" cy="178" rx="12" ry="5" fill="#dde3fb"/>
          <rect x="169" y="158" width="10" height="26" rx="5" fill="#4257ea"/>
          <rect x="248" y="171" width="9" height="31" rx="3.5" fill="#4257ea"/>
          {/* Shadow */}
          <ellipse cx="200" cy="205" rx="90" ry="18" fill="#e6e9fa"/>
        </svg>
      </div>
    </section>
  );
}
