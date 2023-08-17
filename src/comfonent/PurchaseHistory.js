
import './PurchaseHistory.css';

const PurchaseHistory = ({ purchaseHistory }) => {
  return (
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseHistory;