import { useNavigate } from 'react-router-dom';
import './Cart.css';
import Header from './Header';

const Cart = ({ cartItems, handleQuantityChange }) => {

  //장바구니 총 금액 계산
  const totalPrice = cartItems.reduce((total, item) => total + parseInt(item.price.replace(',', '')) * item.quantity, 0);
  const navigate = useNavigate();

  return (

      <div>
        <Header />
        <h1>장바구니</h1>
        <ul>
          {cartItems.map((item, i) => (
            <li key={i}>
              <div className="cart-item">
                <div className="product-info">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <p>
                      {item.name} - {item.price}원 (수량: {item.quantity})
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                        -
                      </button>
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-summary">
          <p>총 금액: {totalPrice}원</p>
          <div className="button-container">
            <button onClick={() => navigate('/Allproduct')}>상품 추가하기</button>
            <button onClick={() => navigate('/privacy')}>주문하기</button>
          </div>
        </div>
      </div>
  );
};

export default Cart;