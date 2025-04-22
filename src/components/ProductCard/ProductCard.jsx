import React from 'react';

import placeholder from '../../assets/placeholder.jpg';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img 
        src={product.img || placeholder}
        alt={product.title}
        className="product-image"
        onError={(e) => {
          e.target.src = placeholder;
        }}
      />
      <div className="product-row">
        <div className="content-first">
          <div className="product-title">{product.title}</div>
          <div className="product-prices">
            <div className="current-price">{product.price} ₽</div>
            {product.oldPrice && (
            <div className="old-price">{product.oldPrice} ₽</div>
            )}
          </div>
        </div>
        <div className="content-second">
          <div className="product-rate"> {product.rate || '4.7'}</div>
          <button className="buy-button">Купить</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;