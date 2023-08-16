import { useNavigate } from "react-router-dom";
import Navbar from "../comfonent/Header";
import "./Login.css"


const Login = () => {

  const navigate = useNavigate();

  const IdPwCheck = () => {

  }


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class = "login-wrapper">

        <h2>Login</h2>
        <form method="get" action="#" id="login-form">
          <input type="text" name="useName" placeholder="Id" id="checkId"/>
          <input type="password" name="userPassword" placeholder="Password" id="checkPw"/>
          <input type="checkbox" id="remember-check" />
          <label for = "remember-check">아이디 저장하기</label>
        
          <input type="checkbox" id="new-person" />
          <label for = "remember-check">회원가입</label>
          <input type="submit" value="login" onClick={() => {
            
            navigate('/Privacy');
          }}/>
        </form>

      </div>
    </>
  );
}

export default Login;