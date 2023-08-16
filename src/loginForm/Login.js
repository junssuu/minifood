import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Login.css"
import Header from "../comfonent/Header";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const IdPwCheck = () => {
    if (!id || !pw) {
      alert('ID와 PW를 확인하세요.')
    } else {
      navigate('/Privacy');
    }
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="login-wrapper">
        <h2>Login</h2>
        <form method="get" action="#" id="login-form">
          <input type="text" name="userName" placeholder="Id" id="checkId"
            value={id} onChange={(e) => setId(e.target.value)}/>
          <input type="password" name="userPassword" placeholder="Password" id="checkPw"
            value={pw} onChange={(e) => setPw(e.target.value)}
          />
          <input type="checkbox" id="remember-check" />
          <label htmlFor="remember-check">아이디 저장하기</label>

          <input type="checkbox" id="new-person" />
          <label htmlFor="new-person">회원가입</label>
          <input type="submit" value="login" onClick={(e) => {
            e.preventDefault();
            IdPwCheck();
          }}/>
        </form>
      </div>
    </>
  );
}

export default Login;