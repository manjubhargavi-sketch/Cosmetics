import React from 'react';
import ShoppingCart from './ShoppingCart';

const ShoppingCartPage = ({ cart }) => {
  return (
    <div>
      <h1>Shopping Cart Page</h1>
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default ShoppingCartPage;
