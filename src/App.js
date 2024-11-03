// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomRoutes from './Components/Routes'; // Your routing component
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CustomRoutes /> {/* Ensure this does not have another <Router> */}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
