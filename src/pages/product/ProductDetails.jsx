import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Create a new CSS file for this page

// This is a placeholder for your product data. 
// In a real application, you would fetch this data from an API.
const allProducts = [
  { 
    id: 'tmt', 
    name: "TMT", 
    price: "₹ 45,500 / MT Onwards *", 
    // You can add more details here that are specific to the product page
    details: [
      { type: "Straight", length: "12000 mm", diameter: "12 mm" },
      { type: "Straight", length: "12000 mm", diameter: "20 mm" }
    ]
  },
  { 
    id: 'hot-rolled', 
    name: "Hot Rolled", 
    price: "₹ 51,000 / MT Onwards *",
    details: []
  },
  // ... and so on for all your products
];

function ProductDetails() {
  const { productId } = useParams();
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details-page">
      <div className="breadcrumbs">
        Home / {product.name}
      </div>
      <div className="product-layout">
        <div className="sidebar">
          {/* This is the left filter panel from your screenshot */}
          <h3>Filters</h3>
          {/* ... Add your filter components here ... */}
        </div>
        <div className="main-content">
          {product.details.map((detail, index) => (
            <div key={index} className="product-listing-card">
              {/* This is a single product card from the screenshot */}
              <div className="product-image">
                <img src="/path-to-image.png" alt={product.name} />
              </div>
              <div className="product-info">
                <h4>SURYADEV, TMT, {detail.type}, FES500D</h4>
                <p>Length - {detail.length}</p>
                <p>Diameter - {detail.diameter}</p>
              </div>
              <div className="seller-info">
                <p>Seller ID: HTS-S50</p>
                <p>Stock: 50.000 MT</p>
                <p>Chennai</p>
              </div>
              <div className="price-info">
                <p>₹44,750/MT</p>
                <button>View Details &gt;&gt;</button>
              </div>
            </div>
          ))}
          {/* ... Add the "Register to View Prices" section ... */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;