import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './loginForm/Login';
import Home from './comfonent/Home';
import Privacy from './loginForm/Privacy';
import AllProduct from './comfonent/AllProduct';
import Customer from './comfonent/Customer';
import Cart from './comfonent/Cart';

function App(props) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
      );
    }
  };


  return (
    <div className="App">
      <Routes>
        {/* 메인화면 */}
        <Route path="/" element={<Home />} />
        {/* 전체상품 */}
        <Route
          path="/Allproduct"
          element={<AllProduct handleAddToCart={handleAddToCart} />}
        />
        {/* 장바구니 */}
        <Route path="/Cart" element={<Cart cartItems={cartItems} 
        handleQuantityChange={handleQuantityChange} />}
        />
        {/* 고객센터 */}
        <Route path="/Customer" element={<Customer />} />
        {/* 로그인페이지 */}
        <Route path="/Login" element={<Login />} />
        {/* 주문정보페이지 */}
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;