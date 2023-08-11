import React from 'react';
import "./Navbar.css";
import logo from "./img/로고.png"

const Navbar = () => {
  return (
    <div>
      <div class='top'>
        <h2>8월 초특가 할인 중</h2>
      </div>

      <div className="logo">
        <img src={logo}/>
      </div>

    </div>


  );
}

export default Navbar;