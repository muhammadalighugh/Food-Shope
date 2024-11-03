import React, { useState } from 'react';
import { useCart } from '../../../context/createContext';

const Cart = () => {
    const { cartItems, totalPrice } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleOrderNow = () => {
        // Logic for placing the order can go here
        setOrderPlaced(true); // Update state to show order placed message
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Your Cart</h2>
            <ul className="list-group">
                {cartItems.length === 0 ? (
                    <li className="list-group-item text-center">Your cart is empty</li>
                ) : (
                    cartItems.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <div className="d-flex align-items-center mb-2 mb-md-0">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    style={{ width: '50px', height: '50px', marginRight: '15px', objectFit: 'cover' }} 
                                    className="img-fluid" 
                                />
                                <div>
                                    <h5 className="mb-1">{item.name}</h5>
                                    <p className="mb-1 text-muted">{item.description}</p>
                                    <span className="fw-bold">${item.price ? item.price.toFixed(2) : '0.00'}</span>
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            {cartItems.length > 0 && (
                <div className="text-center mt-4">
                    <h4>Total Price: ${totalPrice ? totalPrice.toFixed(2) : '0.00'}</h4>
                    <button className="btn btn-success mt-3" onClick={handleOrderNow}>
                        Order Now
                    </button>
                    {orderPlaced && <div className="alert alert-success mt-3">Your order has been placed successfully!</div>}
                </div>
            )}
        </div>
    );
};

export default Cart;
