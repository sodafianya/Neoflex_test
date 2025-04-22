import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, categoryTitle, cartItems = [], onAddToCart = () => {} }) => {
  return (
    <section className="product-section">
      <h2 className="section-title">{categoryTitle}</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            cartItems={cartItems}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;