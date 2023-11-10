// ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, category }) => {
  let filteredProducts;

  if (category === 'lip-makeup') {
    // Filter only lip makeup products
    filteredProducts = products.filter((product) => product.category === category);
  } else if (category === 'foundations') {
    // Filter only foundation products
    filteredProducts = products.filter((product) => product.category === category);
  } else if (category === 'eye-makeup') {
    // Filter only eye makeup products
    filteredProducts = products.filter((product) => product.category === category);
  } else {
    // Show no products for other categories
    filteredProducts = [];
  }

  return (
    <div className="product-list">
      {filteredProducts.map((product, index) => (
        <Product key={index} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
