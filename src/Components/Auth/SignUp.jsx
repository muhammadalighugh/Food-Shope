// src/Auth/SignUp.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth(); // Make sure to implement register in AuthContext
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            await register(email, password); // Call the register function
            navigate('/'); // Redirect to Home page after successful registration
        } catch (err) {
            setError(err); // Set error message if registration fails
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <p className="text-danger text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <p className="text-center mt-3 mb-0">
                    Already have an account? <Link to="/login" className="text-primary">Login</Link>
                </p>
            </div>
        </div>
    );
}
