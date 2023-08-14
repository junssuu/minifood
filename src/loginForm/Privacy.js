import Navbar from "../comfonent/Header";
import "./Privacy.css"


const Privacy = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div class="privacy-all">

        <h2>주문 정보를 입력하세요</h2>
        <form method="get" action="#" id="privacy-form">
          <h3>이름</h3>
          <input type="text" name="useName" placeholder="이름" />
          <h3>주소</h3>
          <input type="text" name="userPassword" placeholder="주소" />
          <h3>결제방식 선택</h3>
          <ul>
            <li>
              <label> <input type="radio" name="payment" />신용카드 </label>
            </li>
            <li>
              <label> <input type="radio" name="payment" />무통장입금 </label>
            </li>
            <li>
              <label> <input type="radio" name="payment" />카카오페이 </label>
            </li>
          </ul>
          <input type="submit" value="주문하기" onClick={() => {
            alert('주문완료.');
          }} />
        </form>
      </div>
    </>

  )
}

export default Privacy;