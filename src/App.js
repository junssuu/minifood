import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './loginForm/Login';
import Home from './comfonent/Home';
import Privacy from './loginForm/Privacy';
import AllProduct from './comfonent/AllProduct';
import Customer from './comfonent/Customer';
import Cart from './comfonent/Cart';
import PurchaseHistory from './comfonent/PurchaseHistory';

function App(props) {
  const [cartItem, setCartItem] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  

  const AddToCart = (item) => {
    const sameItem = cartItem.find((cartItem) => cartItem.id === item.id);
    if (sameItem) {
      setCartItem((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        )
      );
    } else {
      setCartItem((prevcartProduct) => [...prevcartProduct, { ...item, count: 1 }]);
    }
  };

  const cartCountChange = (itemId, newCount) => {
    if (newCount <= 0) {
      setCartItem((prevsetCartProduct) =>
        prevsetCartProduct.filter((item) => item.id !== itemId)
      );
    } else {
      setCartItem((prevCartProduct) =>
        prevCartProduct.map((item) => (item.id === itemId ? { ...item, count: newCount } : item))
      );
    }
  };

  const clearCart = () => {
    setCartItem([]); // 장바구니 내역을 빈 배열로 설정하여 비우기
  };

  const clearpurchaseHistory = () => {
    setPurchaseHistory([]); // 장바구니 내역을 빈 배열로 설정하여 비우기
  };

  const addPurchaseHistory = (items) => {
    setPurchaseHistory((prevHistory) => [...prevHistory, ...items]);
  };

  return (
    <div className="App">
      <Routes>
        {/* 메인화면 */}
        <Route path="/" element={<Home />} />
        {/* 전체상품 */}
        <Route
          path="/Allproduct"
          element={<AllProduct AddToCart={AddToCart} />}
        />
        {/* 장바구니 */}
        <Route
          path="/Cart"
          element={<Cart cartItem={cartItem} cartCountChange={cartCountChange} 
          clearCart={clearCart} addPurchaseHistory={addPurchaseHistory}/>}
        />
        {/* 고객센터 */}
        <Route path="/Customer" element={<Customer />} />
        {/* 로그인페이지 */}
        <Route path="/Login" element={<Login />} />
        {/* 주문정보페이지 */}
        <Route path="/Privacy" element={<Privacy />} />
        {/* 구매내역페이지 */}
        <Route
          path="/PurchaseHistory"
          element={<PurchaseHistory 
          purchaseHistory={purchaseHistory} clearpurchaseHistory={clearpurchaseHistory} />}
        />
      </Routes>
      </div>
  );
}

export default App;