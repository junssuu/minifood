import Main from "./Main";
import Review from "./Review";
import Map from "./Map";
import Header from "./Header";



const Home = () => {
  return (
    <>
      <Header />
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1>배너 1</h1>
          </div>
          <div class="carousel-item">
            <h1>배너 2</h1>
          </div>
          <div class="carousel-item">
            <h1>배너 3</h1>
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