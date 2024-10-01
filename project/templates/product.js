import React from 'react';
import './ProductsSection.css';

function ProductsSection() {
  const products = [
    { name: 'Avocados', img: 'avocado.jpg' },
    { name: 'French Beans', img: 'beans.jpg' },
    { name: 'Mangoes', img: 'mango.jpg' },
    { name: 'Roses', img: 'roses.jpg' }
  ];

  return (
    <section className="products-section" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
