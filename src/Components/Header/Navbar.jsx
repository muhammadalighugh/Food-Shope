// src/Header/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the Auth context
import './Navbar.css'; // Optional for additional styling

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth(); // Access authentication state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">FastFood</Link>
            </li>
            <li className="nav-item">
              <Link to="/italian" className="nav-link">Italian Dishes</Link>
            </li>
            <li className="nav-item">
              <Link to="/asian" className="nav-link">Asian Cuisine</Link>
            </li>
            {!isAuthenticated ? ( // Show login/signup if not authenticated
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn" onClick={handleLogout}>Logout</button> {/* Logout button */}
              </li>
            )}
          </ul>
          <div className="d-flex align-items-center">
            <Link to="/wishlist" className="nav-link">
              <i className="fas fa-heart me-2" title="Wishlist"></i>
            </Link>
            <Link to="/cart" className="nav-link position-relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">3</span> {/* Change the number as needed */}
              <span className="total-bill ms-1"></span> {/* Add the total bill here */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
