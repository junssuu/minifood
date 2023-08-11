import "./Login.css"


const Login = () => {
  return (
    <div class = "login-wrapper">
      <h2>Login</h2>
      <form method="get" action="#" id="login-form">
        <input type="text" name="useName" placeholder="Id"></input>
        <input type="password" name="userPassword" placeholder="Password"></input>
        <input type="checkbox" id="remember-check"></input>
        <label for = "remember-check">아이디 저장하기</label>
        <input type="submit" value="login"></input>
      </form>

    </div>
  );
}

export default Login;