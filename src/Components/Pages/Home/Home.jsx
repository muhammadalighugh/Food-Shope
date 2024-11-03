// src/Pages/Home/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import fastFoodMenu from '../../../data/fastFoodMenu'; // Import your fast food data
import italianDishesMenu from '../../../data/italianDishesMenu'; // Import your Italian dishes data
import HeroSection from './HeroSection';

export default function Home() {
  return (
  <>
  <HeroSection />
    <div className="container">
      {/* Fast Food Menu Section */}
      <section>
        <h2 className="text-center my-4">Fast Food Menu</h2>
        <div className="row">
          {fastFoodMenu.slice(0, 3).map(item => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                  <button className="btn btn-primary w-100">Add to Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/menu" className="btn btn-secondary my-3">More Fast Food</Link>
        </div>
      </section>

      {/* Italian Dishes Menu Section */}
      <section>
        <h2 className="text-center my-4">Italian Dishes Menu</h2>
        <div className="row">
          {italianDishesMenu.slice(0, 3).map(item => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                  <button className="btn btn-primary w-100">Add to Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/italian" className="btn btn-secondary my-3">More Italian Dishes</Link>
        </div>
      </section>
    </div>
  
  </>
  );
}
