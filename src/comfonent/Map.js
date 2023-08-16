import mapimg from "./img/서울 지도.png";
import "./Map.css";

const Map = () => {
  return (
    <div class = "region">
      <p>배달 가능 지역</p>
      <img src= {mapimg} />
    </div>
  )
}

export default Map;