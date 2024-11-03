// src/Components/Routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Header/Navbar';
import MainFooter from './Footer/MainFooter';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import AsianCuisinePage from './Pages/Items/AsianCuisinePage';
import FastFoodMenuPage from './Pages/Items/FastFoodMenuPage';
import ItalianDishesPage from './Pages/Items/ItalianDishesPage';

export default function CustomRoutes() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/menu" element={<FastFoodMenuPage />} />
          <Route path="/italian" element={<ItalianDishesPage />} />
          <Route path="/asian" element={<AsianCuisinePage />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
}
