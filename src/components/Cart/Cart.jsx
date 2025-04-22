import React from 'react';
import './Cart.css';
import placeholder from '../../assets/placeholder.jpg';

// import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
{/* <AiOutlinePlusCircle />    <AiOutlineMinusCircle /> */}
const Cart = ({ items, totalPrice, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart">
      <h2 className="cart-title">Корзина</h2>
      
      {items.length === 0 ? (
        <p className="empty-cart">Ваша корзина пуста</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.img || placeholder}
                  className="product-card-image"
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = placeholder;
                  }}
                />

                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <div className="cart-item-price">{item.price} ₽</div>
                </div>
                <div className="cart-item-controls">
                  <button 
                    className="cart-quantity-btn" 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="cart-quantity">{item.quantity}</span>
                  <button 
                    className="cart-quantity-btn" 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    className="cart-remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <div className="cart-total-label">Итого</div>
            <div className="cart-total-price">{totalPrice} ₽</div>
          </div>
          
          <button className="checkout-button">Перейти к оформлению</button>
        </>
      )}
    </div>
  );
};

export default Cart;