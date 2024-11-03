// src/Components/Pages/Items/AsianCuisinePage.jsx

import React from 'react';
import asianCuisineMenu from '../../../data/asianCuisineMenu'; // Adjust the path based on your folder structure
import { useCart } from '../../../context/createContext';
import { useAuth } from '../../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AsianCuisinePage = () => {
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate(); // Initialize navigate for redirection

    const handleAddToCart = (item) => {
        if (!isAuthenticated) {
            // If not authenticated, redirect to login page
            navigate('/login'); // Use navigate instead of history.push
        } else {
            addToCart(item);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Asian Cuisine Menu</h1>
            <div className="row">
                {asianCuisineMenu.map(item => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
                        <div className="card h-100 shadow-sm">
                            <img src={item.image} alt={item.name} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                                <button 
                                    className="btn btn-primary w-100" 
                                    onClick={() => handleAddToCart(item)} // Call handleAddToCart when clicked
                                >
                                    Add to Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsianCuisinePage;
