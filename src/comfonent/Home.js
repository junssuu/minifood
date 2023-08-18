import Main from "./Main";
import Review from "./Review";
import Map from "./Map";
import Header from "./Header";
import 배너1 from "../comfonent/img/배너1.JPG";
import 배너2 from "../comfonent/img/배너2.JPG";
import 배너3 from "../comfonent/img/배너3.JPG";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={배너1} alt="배너1" />
          </div>
          <div class="carousel-item">
            <img src={배너2} alt="배너2" />
          </div>
          <div class="carousel-item">
            <img src={배너3} alt="배너3" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Main />
      <Map />
      <Review />
    </>
  )
}

export default Home;