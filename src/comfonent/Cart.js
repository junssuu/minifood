import { useNavigate } from 'react-router-dom';
import './Cart.css';
import Header from './Header';

const Cart = ({ cartItem, cartCountChange, clearCart, addPurchaseHistory }) => {

  //장바구니 총 금액 계산
  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.count, 0);
  
  const navigate = useNavigate();
  
  // 주문하면 장바구니에 있던 상품을 구매내역으로 이동하고
  // 장바구니는 비워주기
  const PurchaseHistoryMovement = () => {
    addPurchaseHistory(cartItem);
    clearCart();
    alert('주문 정보를 입력하세요.');
    navigate('/Privacy');
  };

  return (
      <div>
        <Header />
        <h1>장바구니</h1>

          {cartItem.map((data, i) => (
                        
              <div className="cart-item">
                {i + 1}
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
          ))}

        <div className="cart-summary">

          <p>총 금액: {totalPrice}원</p>
          <div className="button-container">
            <button onClick={() => navigate('/Allproduct')}>상품 추가하기</button>
            <button onClick={() => {
              PurchaseHistoryMovement();
            }}>주문하기
            </button>
          </div>
        </div>
      </div>
  );
};

export default Cart;