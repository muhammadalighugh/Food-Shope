// src/Pages/ItalianDishesPage.js

import React from 'react';
import italianDishesMenu from '../../../data/italianDishesMenu'; // Adjust the path based on your folder structure
import { useCart } from '../../../context/createContext'; // Import the CartContext

const ItalianDishesPage = () => {
  const { addToCart } = useCart(); // Use the context to get the addToCart function

  return (
    <div className="container">
      <h1 className="text-center my-4">Italian Dishes Menu</h1>
      <div className="row">
        {italianDishesMenu.length > 0 ? (
          italianDishesMenu.map(item => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                  <button 
                    className="btn btn-primary w-100" 
                    onClick={() => addToCart(item)} // Call addToCart when clicked
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No items available in the Italian Dishes Menu.</p>
        )}
      </div>
    </div>
  );
};

export default ItalianDishesPage;
