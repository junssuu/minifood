
import Header from './Header';
import './PurchaseHistory.css';

const PurchaseHistory = ({ purchaseHistory, clearpurchaseHistory}) => {
  return (
    <>
      <Header />
      <div className="purchase-history">
        <h1>구매 내역</h1>
        <ul>
          {purchaseHistory.map((data, i) => (
            <li key={i}>
              <div>
                <img src={data.image} alt={data.name} />
              </div>
              <div className="item-info">
                <p>상품명: {data.name}</p>
                <p>가격: {data.price}원</p>
                <p>수량: {data.count}</p>
              </div>
                <button onClick={() => {
                  let temp = window.confirm('정말 취소하시겠습니까?');
                  if(temp === true){
                    alert('구매내역이 삭제 되었습니다.');
                    clearpurchaseHistory();
                  }
                }}>구매취소</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PurchaseHistory;