// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Use useNavigate here

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    // You might want to navigate somewhere after adding an item
    navigate('/cart'); // For example, navigate to the cart page
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
