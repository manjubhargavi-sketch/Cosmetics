// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import './App.css';
 
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cosmeticProducts, setCosmeticProducts] = useState([
    { name: 'Lipstick', price: 10.99, image: 'lipstick.jpeg', category: 'lip-makeup' },
    { name: 'Color sensational', price: 12.99, image: 'lipstick2.jpeg', category: 'lip-makeup' },
    { name: 'Mascara', price: 8.99, image: 'mascara.jpeg', category: 'eye-makeup' },
    { name: 'Lakme', price: 15.99, image: 'foundation.jpeg', category: 'foundations' },
    { name: 'Maybelline', price: 13.99, image: 'foundation1.jpeg', category: 'foundations' },
    { name: 'Sugar Mascara', price: 6.99, image: 'mascara2.jpeg', category: 'eye-makeup' },
    // Add more products as needed
  ]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            Shopping Cart
          </Link>
          <Link to="/add-product" className="nav-link">
            Add Product
          </Link>
         
          <Link to="/lip-makeup" className="nav-link">
            Lip Makeup
          </Link>
          <Link to="/foundations" className="nav-link">
            Foundations
          </Link>
          <Link to="/eye-makeup" className="nav-link">
            Eye Makeup
          </Link>
        </div>
        <div>
        <Link to="/lip-makeup" className="nav-link">
            <img src="lipstick.jpeg" alt="Lip Makeup" className="category-icon" />
            
          </Link>
          <Link to="/foundations" className="nav-link">
            <img src="foundation.jpeg" alt="Foundations" className="category-icon" />
           
          </Link>
          <Link to="/eye-makeup" className="nav-link">
            <img src="mascara.jpeg" alt="Eye Makeup" className="category-icon" />
           
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<ProductList products={cosmeticProducts} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />}
          />
          
          <Route
            path="/:category"
            element={<ProductList products={cosmeticProducts} addToCart={addToCart} />}
          />
          <Route
  path="/lip-makeup"
  element={<ProductList products={cosmeticProducts} addToCart={addToCart} category="lip-makeup" />}
/>
          
<Route
  path="/foundations"
  element={<ProductList products={cosmeticProducts} addToCart={addToCart} category="foundations" />}
/>
<Route
  path="/eye-makeup"
  element={<ProductList products={cosmeticProducts} addToCart={addToCart} category="eye-makeup" />}
/>

          <Route
            path="/:category/:productName"
            element={<div>Details for a specific product go here</div>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
