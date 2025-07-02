import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, details, price, oldPrice, buttonText, onButtonClick }) => (
  <div className="product-card-custom text-white rounded-4">
    <div className="ratio ratio-16x9">
        <img src={image} alt={title} className="rounded-4 object-fit-cover h-100 mb-3 w-100" />

    </div>
    <div className="product-card-body p-3 p-xl-4">
      <h5 className="product-card-title mb-0 fw-bold">{title}</h5>
      <div className="product-card-details my-3 small text-secondary">{details}</div>
      <div className="product-card-prices mb-4">
        <span className="product-card-price fw-bold me-2">${price}</span>
        {oldPrice && <span className="product-card-oldprice fw-bold text-default">${oldPrice}</span>}
      </div>
      <button className="btn btn-primary rounded-pill" onClick={onButtonClick}>{buttonText}</button>
    </div>
  </div>
);

export default ProductCard; 