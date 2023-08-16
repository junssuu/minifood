import { useNavigate } from "react-router-dom";
import Navbar from "../comfonent/Header";
import "./Privacy.css"
import { useState } from 'react';


const Privacy = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const nameAddressCheck = () => {
    if (!name || !address) {
      alert('이름과 주소를 확인하세요..');
    } else {
      alert('주문이 완료되었습니다.');
      navigate('/');
    }
  }

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div class="privacy-all">

        <h2>주문 정보를 입력하세요</h2>
        <form method="get" action="#" id="privacy-form">
          <h3>이름</h3>

          <input type="text" name="useName" placeholder="이름" 
          value={name} onChange={(e) => setName(e.target.value)} />
          <h3>주소</h3>

          <input type="text" name="userPassword" placeholder="주소" 
          value={address} onChange={(e) => setAddress(e.target.value)}/>
          <h3>결제방식 선택</h3>

          <ul class="Approval-list">
            <li>
              <label> <input type="radio" name="payment" />신용카드 </label>
            </li>
            <li>
              <label> <input type="radio" name="payment" />휴대폰 결제 </label>
            </li>
            <li>
              <label> <input type="radio" name="payment" />카카오페이 </label>
            </li>
          </ul>

          <input type="submit" value="주문하기" onClick={(e) => {
            e.preventDefault();
            nameAddressCheck();
          }} />
        </form>
      </div>
    </>

  )
}

export default Privacy;