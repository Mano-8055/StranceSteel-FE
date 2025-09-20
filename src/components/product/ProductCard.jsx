import React from 'react';
import "./style.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card__details">
        <h4 className="product-name">{product.name}</h4>
        <div className="product-specs">
          <span>Thickness - {product.specs.thickness}</span>
          <span>Width - {product.specs.width}</span>
          <span>Length - {product.specs.length}</span>
        </div>
      </div>
      <div className="product-card__info">
        <div className="info-row">
          <span>Seller ID: <b>{product.sellerId}</b></span>
          <span>Stock: <b>{product.stock}</b></span>
        </div>
        <div className="info-row">
          <span>📍 {product.location}</span>
          <span>🚚 {product.deliveryFee}</span>
        </div>
        <div className="price-row">
          <span className="product-price">{product.price}</span>
        </div>
      </div>
      <div className="product-card__actions">
        <button className="heart-icon">❤️</button>
        <button className="arrow-icon">❯</button>
      </div>
    </div>
  );
};

export default ProductCard;