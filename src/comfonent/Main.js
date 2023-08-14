import "./Main.css"
import MainCarousel from "./MainCarousel";


const Main = () => {
  return (

    <div>
      <div className="banner">
        <h1>배너 이미지 구하는 중</h1>
      </div>

      <div class="menubar">
        <p>추천 메뉴</p>
        <MainCarousel />
      </div>

    </div>

  );
}

export default Main;