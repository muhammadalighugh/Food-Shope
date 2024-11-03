// src/context/WishlistContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the context
const WishlistContext = createContext();

// Create the provider component
export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishlist = (item) => setWishlistItems((prevItems) => [...prevItems, item]);

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Custom hook to use the Wishlist context
export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
