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
  const [cartItem, setCartItem] = useState([]); //장바구니에 담긴 상품
  const [purchaseHistory, setPurchaseHistory] = useState([]); // 구매내역에 담긴 상품
  
  //장바구니에 상품 추가
  const AddToCart = (item) => {
    const sameItem = cartItem.find((cartItem) => cartItem.id === item.id);
    if (sameItem) {
      setCartItem(() => {
        const updatedCart = cartItem.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );
        return updatedCart;
      });
    } else {
      setCartItem((currentCart) => [...currentCart, { ...item, count: 1 }]);
    }
  };
  
  // 장바구니 수량 늘리고 줄이기
  const cartCountChange = (itemId, newCount) => {
    if (newCount <= 0) {
      setCartItem(() => {
        const updatedCart = cartItem.filter((item) => item.id !== itemId);
        return updatedCart;
      });
    } else {
      setCartItem(() => {
        const updatedCart = cartItem.map((item) =>
          item.id === itemId ? { ...item, count: newCount } : item
        );
        return updatedCart;
      });
    }
  };

  // 장바구니 비워주기
  const clearCart = () => {
    setCartItem([]);
  };

  // 구매내역 삭제
  const clearpurchaseHistory = (itemId) => {
    setPurchaseHistory((currentHistory) =>
      currentHistory.filter((item) => item.id !== itemId)
    );
  };

  // 장바구니에서 구매 완료 시 구매내역으로 옮겨주기
  const addPurchaseHistory = (items) => {
    setPurchaseHistory((currentHistory) => [...currentHistory, ...items]);
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