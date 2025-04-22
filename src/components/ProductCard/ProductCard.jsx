import React from 'react';
import placeholder from '../../assets/placeholder.jpg';
import './ProductCard.css';

function ProductCard({ product, cartItems = [], onAddToCart = () => {} }) {
  if (!product) return null;
  
  const cartItem = Array.isArray(cartItems) 
    ? cartItems.find(item => item?.id === product.id) 
    : null;

  const handleAddToCart = () => {
    if (typeof onAddToCart === 'function') {
      onAddToCart(product);
    }
  };

  const handleIncrement = () => {
    handleAddToCart();
  };

  const handleDecrement = () => {
    if (cartItem && typeof onAddToCart === 'function') {
      onAddToCart({ ...product, quantity: Math.max(0, cartItem.quantity - 1) });
    }
  };

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
          <div className="product-rate">{product.rate || '4.7'}</div>
          {cartItem ? (
            <div className="quantity-control">
              <button className="quantity-btn" onClick={handleDecrement}>-</button>
              <span className="quantity">{cartItem.quantity}</span>
              <button className="quantity-btn" onClick={handleIncrement}>+</button>
            </div>
          ) : (
            <button className="buy-button" onClick={handleAddToCart}>Купить</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;