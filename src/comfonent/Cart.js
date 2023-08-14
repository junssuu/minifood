import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, handleAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, i) => (
            <div key={i} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>{item.price}원</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>장바구니에 상품이 없습니다.</p>
      )}
      <button onClick={() => navigate('/Allproduct')} className="continue-shopping">
        쇼핑 계속하기
      </button>
    </div>
  );
};

export default Cart;