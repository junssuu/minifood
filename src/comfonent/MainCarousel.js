import img1 from "./img/그림1.png";
import img2 from "./img/그림2.png";
import img3 from "./img/그림3.png";
import img4 from "./img/그림4.png";
import StyledSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCarousel.css";
import { useNavigate } from "react-router-dom";

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

  const btnStyle = {
    color: "white",
    background: "teal",
    padding: ".375rem .75rem",
    border: "1px solid teal",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };

  return(
    <div class="menuimg">
      <StyledSlider {...settings}>
        <img class = "recommendimg"src={img1} alt="그림1"/>
        <img class = "recommendimg"src={img2} alt="그림2"/>
        <img class = "recommendimg"src={img3} alt="그림3"/>
        <img class = "recommendimg"src={img4} alt="그림4"/>
      </StyledSlider>
      <button style = {btnStyle} class = "orderbutton" onClick={() => {
        let temp = window.confirm("로그인 하시겠습니까?");
        console.log(temp);
        if(temp === true) {
          navigate('/Login');
        } else {
          alert("로그인 후 주문이 가능합니다.");
        }
      }}>구매하기</button>
      <p class="price"> 가격 : 5,900원</p>
    </div>
    
  );
}

export default MainCarousel;
