import React from 'react';
import { RiHeartLine, RiShoppingCart2Line } from "react-icons/ri";
import './Header.css';

const Header = ({ cartItemsCount, onCartClick, onLogoClick }) => {
  const handleFavoriteClick = () => {
    console.log('Избранное clicked');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo" onClick={onLogoClick}>QPICK</h1>
        <div className="header-icons">
          <button 
            className="icon-button" 
            onClick={handleFavoriteClick}
            aria-label="Избранное"
          >
            <RiHeartLine className="icon" />
          </button>
          <button 
            className="icon-button" 
            onClick={onCartClick}
            aria-label="Корзина"
          >
            <RiShoppingCart2Line className="icon" />
            {cartItemsCount > 0 && <span className="badge">{cartItemsCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;