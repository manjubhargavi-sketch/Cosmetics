// Product.js
import React from 'react';

const Product = ({ name, price, addToCart,image }) => {
  return (
    <div className="product">
      <img src={`images/${image}`} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ name, price })}>Add to Cart</button>
    </div>
  );
};

export default Product;
