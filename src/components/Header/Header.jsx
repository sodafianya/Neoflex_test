import React from 'react';
import { RiHeartLine, RiShoppingCart2Line } from "react-icons/ri";
import './Header.css';

const Header = () => {
  const handleFavoriteClick = () => {
    console.log('Избранное clicked');
    // Здесь можно добавить логику для избранного
  };

  const handleCartClick = () => {
    console.log('Корзина clicked');
    // Здесь можно добавить логику для корзины
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">QPICK</h1>
        <div className="header-icons">
          <button 
            className="icon-button" 
            onClick={handleFavoriteClick}
            aria-label="Избранное"
          >
            <RiHeartLine  className="icon" />
            {/* Можно добавить счетчик: <span className="badge">3</span> */}
          </button>
          <button 
            className="icon-button" 
            onClick={handleCartClick}
            aria-label="Корзина"
          >
            <RiShoppingCart2Line className="icon" />
            {/* Можно добавить счетчик: <span className="badge">5</span> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;