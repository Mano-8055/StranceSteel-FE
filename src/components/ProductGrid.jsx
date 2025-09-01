import React from "react";
import "./productgrid.css";
import tmtImg from "../assets/Images/tmt.png";
import hotRolledImg from "../assets/Images/hotrolledsheets.png";
import crcaImg from "../assets/Images/crcamothercoil.png";
import gpgiImg from "../assets/Images/GP_GI.png";
import hrpoImg from "../assets/Images/HRPO.png";
import channelsImg from "../assets/Images/CHANNELS.png";
import angelsImg from "../assets/Images/Angles.png";
import beamsImg from "../assets/Images/beamsandangles.png";
import mschequeredImg from "../assets/Images/mschequered.jpeg";
import msflatsImg from "../assets/Images/flats.png";
import msplatesImg from "../assets/Images/plates.png";
import msrodImg from "../assets/Images/msrod.jpeg";
import rsjoistsImg from "../assets/Images/joists.png";
import colourcoatedImg from "../assets/Images/colorcoil.png";
import mspipeImg from "../assets/Images/pipes.png";

const products = [
  { name: "TMT", price: "₹ 45,500 / MT Onwards *", image: tmtImg },
  { name: "Hot Rolled", price: "₹ 51,000 / MT Onwards *", image: hotRolledImg },
  { name: "CRCA", price: "₹ 59,800 / MT Onwards *", image: crcaImg },
  { name: "GP/GI", price: "₹ 65,500 / MT Onwards *", image: gpgiImg },
  { name: "HRPO", price: "₹ 54,000 / MT Onwards *", image: hrpoImg },
  { name: "Channels", price: "₹ 46,250 / MT Onwards *", image: channelsImg },
  { name: "Angles", price: "₹ 48,500 / MT Onwards *", image: angelsImg },
  { name: "Beams & Columns", price: "₹ 50,000 / MT Onwards *", image: beamsImg },
  { name: "MS Chequered", price: "₹ 56,000 / MT Onwards *", image: mschequeredImg },
  { name: "MS Flats", price: "₹ 46,250 / MT Onwards *", image: msflatsImg },
  { name: "MS Plates", price: "₹ 52,000 / MT Onwards *", image: msplatesImg },
  { name: "MS Rod", price: "₹ 47,750 / MT Onwards *", image: msrodImg },
  { name: "RS Joists", price: "₹ 49,500 / MT Onwards *", image: rsjoistsImg },
  { name: "Colour Coated", price: "₹ 86,500 / MT Onwards *", image: colourcoatedImg },
  { name: "MS Pipe", price: "₹ 51,097 / MT Onwards *", image: mspipeImg },
];

function ProductGrid() {
  return (
    <section className="product-section">
      <h2>Our Products</h2>
      <div className="underline"></div>
      <div className="product-grid">
        {products.map((item, index) => (
          
          <div key={index} className="product-item">
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          </div>          
          
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
