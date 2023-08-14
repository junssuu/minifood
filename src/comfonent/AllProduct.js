import React, { useState } from 'react';
import "./AllProduct.css";
import 그림1 from './img/그림1.png';
import 그림2 from './img/그림2.png';
import 그림3 from './img/그림3.png';
import 그림4 from './img/그림4.png';
import 그림5 from './img/그림5.JPG';
import 그림6 from './img/그림6.JPG';
import 그림7 from './img/그림7.JPG';
import 그림8 from './img/그림8.JPG';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';


const AllProduct = ({setData, handleAddToCart}) => {
  const item = [
    { id: 1, name: '상품1', price: '5,900', image: 그림1 },
    { id: 2, name: '상품2', price: '5,900', image: 그림2 },
    { id: 3, name: '상품3', price: '5,900', image: 그림3 },
    { id: 4, name: '상품4', price: '5,900', image: 그림4 },
    { id: 5, name: '상품5', price: '7,900', image: 그림5 },
    { id: 6, name: '상품6', price: '7,900', image: 그림6 },
    { id: 7, name: '상품7', price: '7,900', image: 그림7 },
    { id: 8, name: '상품8', price: '7,900', image: 그림8 }
  ];

  const [addToCart, setAddToCart] = useState([]);
  const navigate = useNavigate();
  let tmp;

  const handleAddToCartClick = (data) => {
    const temp = window.confirm('장바구니에 담으시겠습니까?');
    if (temp) {
      handleAddToCart((prevCart) => [...prevCart, data]);
      const tmp = window.confirm('확인: 장바구니 이동, 취소: 계속 쇼핑');
      console.log(addToCart);
      if (tmp) {
        navigate('/Cart');
      }
    }
  };

  return (
    <>
    <h1>전체 상품 리스트</h1>
      <div className='allList'>
        {item.map((data, i) => (
          <div key={i}>
            <img src={data.image} alt={data.name} onClick={() => handleAddToCartClick(data)} />
            <p>
              {data.name}<br />
              {data.price}원
            </p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProduct;