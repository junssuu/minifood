import reimg1 from "./img/리뷰1.png";
import reimg2 from "./img/리뷰2.png";
import reimg3 from "./img/리뷰3.png";
import reimg4 from "./img/리뷰4.png";
import "./Review.css";


const Review = () => {
  return (
    <>
      <div class="revtext">
        고객 리뷰
      </div>
      <div class="reviewimg">
        <img src={reimg1} alt="rev1"/>
        <img src={reimg2} alt="rev2"/>
        <img src={reimg3} alt="rev3"/>
        <img src={reimg4} alt="rev4"/>
      </div>
    </>
  );
}

export default Review;