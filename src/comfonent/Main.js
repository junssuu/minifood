import "./Main.css"
import MainCarousel from "./MainCarousel";
import bannerimg from "./img/배너.jpg";

const Main = () => {
  return (
    <div>
      <img class = "banner" src={bannerimg}/>

      <div class="menubar">
        <p>전체 메뉴</p>
        <MainCarousel />
      </div>

    </div>

  );
}

export default Main;