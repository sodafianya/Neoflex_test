import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

import './ProductGrid.css';

const ProductGrid = ({ products, categoryTitle }) => {
  return (
    <section className="product-grid-container">
      <h2 className="product-grid-title">{categoryTitle}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            className="product-card"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;