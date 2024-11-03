// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/createContext'; // Assuming you have CartProvider

ReactDOM.render(
    <AuthProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </AuthProvider>,
    document.getElementById('root')
);
