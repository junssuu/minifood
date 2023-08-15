import { useNavigate } from 'react-router-dom';
import './Cart.css';
import Header from './Header';

const Cart = ({ cartItem, cartCountChange }) => {

  //장바구니 총 금액 계산
  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.count, 0);
  const navigate = useNavigate();

  return (

      <div>
        <Header />
        <h1>장바구니</h1>
        <ul>
          {cartItem.map((data, i) => (
            <li key={i}>
              <div className="cart-item">
                <div className="product-info">
                  <img src={data.image} alt={data.name} />
                  <div className="item-info">
                    <p>
                      {data.name} : {data.price}원 (수량: {data.count})
                      <button onClick={() => cartCountChange(data.id, data.count - 1)}>
                        -
                      </button>
                      <button onClick={() => cartCountChange(data.id, data.count + 1)}>
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