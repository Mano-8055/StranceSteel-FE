import React from "react";
import "./brandgrid.css";
import Suryadev from "../assets/Images/suryadevlogo.png"
import TataSteel from "../assets/Images/tatasteel.png"
import Panther from "../assets/Images/panther.png"
import JSWSteel from "../assets/Images/JSWSteel.png"
import SRJSAIL from "../assets/Images/SRJSAIL.png"
import PulkitTmt from "../assets/Images/PulkitTmt.jpeg"
import JSWSilveron from "../assets/Images/JSWSilveron.png"
import VizagSteel from "../assets/Images/VizagSteel.png"
import ShyamSteel from "../assets/Images/ShyamSteel.png"
import JindalSteel from "../assets/Images/JindalSteel.png"
import JSWColouron from "../assets/Images/JSWColouron.png"
import PragatiPFI from "../assets/Images/PragatiPFI.png"
import AMNSIndia from "../assets/Images/AMNSIndia.png"
import VikiTmt from "../assets/Images/VikiTmt.jpg"
import KedaiSteel from "../assets/Images/KedaiSteel.png"
import MeenakshiSteel from "../assets/Images/MeenakshiSteel.png"

// Mocked brands data — replace logo src's with your actual image paths or imports.
const brands = [
  { name: "SuryaDev", logo: Suryadev },
  { name: "TataSteel", logo: TataSteel },
  { name: "Panther", logo: Panther },
  { name: "JSWSteel", logo: JSWSteel },
  { name: "SRJSAIL", logo: SRJSAIL },
  { name: "PulkitTmt", logo: PulkitTmt },
  { name: "JSWSilveron", logo: JSWSilveron },
  { name: "VizagSteel", logo: VizagSteel },
  { name: "ShyamSteel", logo: ShyamSteel },
  { name: "JindalSteel", logo: JindalSteel },
  { name: "JSWColouron", logo: JSWColouron },
  { name: "PragatiPFI", logo: PragatiPFI },
  { name: "AMNSIndia", logo: AMNSIndia },
  { name: "VikiTmt", logo: VikiTmt },
  { name: "KediaSteel", logo: KedaiSteel },
  { name: "MeenakshiSteel", logo: MeenakshiSteel }
];

// Main Component
export default function BrandGrid() {
  return (
    <div className="brand-section">
      <div className="brand-content">
        <p className="brand-caption">YOUR GATEWAY TO BUY STEEL ONLINE</p>
        <h2>
          From Mills to You
          <br />
          <span className="brand-strong">All Brands Under One Roof!</span>
        </h2>
        <p className="brand-desc">
          We bring you a wide range of trusted steel brands, ensuring quality and authenticity in every order. Whatever the brand, we’ve got it making your steel procurement seamless and reliable.
        </p>
        <button className="brand-cta">Explore By Brands</button>
      </div>
      <div className="brand-logos">
        {brands.map((brand) => (
          <div className="brand-logo-card" key={brand.name}>
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
      
    </div>
  );
}
