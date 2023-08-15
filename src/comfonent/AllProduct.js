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
import Header from './Header';


const AllProduct = ({ AddToCart }) => {
  const item = [
    { id: 1, name: '상품1', price: '5900', image: 그림1, count: 0 },
    { id: 2, name: '상품2', price: '5900', image: 그림2, count: 0 },
    { id: 3, name: '상품3', price: '5900', image: 그림3, count: 0 },
    { id: 4, name: '상품4', price: '5900', image: 그림4, count: 0 },
    { id: 5, name: '상품5', price: '7900', image: 그림5, count: 0 },
    { id: 6, name: '상품6', price: '7900', image: 그림6, count: 0 },
    { id: 7, name: '상품7', price: '7900', image: 그림7, count: 0 },
    { id: 8, name: '상품8', price: '7900', image: 그림8, count: 0 }
  ];

  const navigate = useNavigate();
  let tmp;

  const AddToCartClick = (data) => {
    const temp = window.confirm('장바구니에 담으시겠습니까?');
    if (temp) {
      AddToCart(data);
      const tmp = window.confirm('확인: 장바구니 이동, 취소: 계속 쇼핑');
      if (tmp) {
        navigate('/Cart');
      }
    }
  };

  return (
    <>
      <Header />
      <h1>전체 상품 리스트</h1>
      <div className='allList'>
        {item.map((data, i) => (
          <div key={i}>
            <img src={data.image} alt={data.name} 
            onClick={() => AddToCartClick(data)} />
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