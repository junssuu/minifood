import img1 from "./img/그림1.png";
import img2 from "./img/그림2.png";
import img3 from "./img/그림3.png";
import img4 from "./img/그림4.png";
import StyledSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCarousel.css";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Login from "../loginForm/Login";

const MainCarousel = () => {

  const navigate = useNavigate();

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <div class="menuimg">
      <StyledSlider {...settings}>
        <img class = "recommendimg"src={img1} />
        <img class = "recommendimg"src={img2} />
        <img class = "recommendimg"src={img3} />
        <img class = "recommendimg"src={img4} />
      </StyledSlider>
      <button class = "orderbutton" onClick={() => {
        let temp = window.confirm("로그인 하시겠습니까?");
        if(temp) {
          {navigate('/cart')};
        }
      }}>구매하기</button>
      <p class="price"> 가격 : 5,900원</p>
    </div>
    
  );
}

export default MainCarousel;
