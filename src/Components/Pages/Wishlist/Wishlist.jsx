// src/Pages/Wishlist/Wishlist.js

import React from 'react';

import { useWishlist } from '../../../context/WishlistContext.js'; // Ensure this path is correct

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist(); // Access wishlist items and removal function

    return (
        <div className="container mt-5">
            <h2>Your Wishlist</h2>
            {wishlistItems.length > 0 ? (
                <ul>
                    {wishlistItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist; // Ensure you're using 'export default Wishlist;'
