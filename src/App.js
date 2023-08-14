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
  const [data, setData] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
  });

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Routes>
        {/* 메인화면 */}
        <Route path="/" element={<Home />} />
        {/* 전체상품 */}
        <Route
          path="/Allproduct"
          element={<AllProduct setData={setData} handleAddToCart={handleAddToCart} />}
        />
        {/* 장바구니 */}
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
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