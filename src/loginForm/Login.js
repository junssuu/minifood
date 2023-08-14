import { useNavigate } from "react-router-dom";
import Navbar from "../comfonent/Header";
import "./Login.css"


const Login = () => {

  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class = "login-wrapper">

        <h2>Login</h2>
        <form method="get" action="#" id="login-form">
          <input type="text" name="useName" placeholder="Id" id="checkId"/>
          <input type="password" name="userPassword" placeholder="Password" id="checkId"/>
          <input type="checkbox" id="remember-check" />
          <label for = "remember-check">아이디 저장하기</label>
          <input type="submit" value="login" onClick={() => {
            if('checkId' != null && 'checkPw' != null){
              navigate('/privacy');
            } else {
              alert('ID, PW를 입력하세요');
            }
          }}/>
        </form>

      </div>
    </>
  );
}

export default Login;