import mapimg from "./img/서울 지도.png";
import "./Map.css";

const Map = () => {
  return (
    <div class = "region">
      배달 가능 지역
      <img src= {mapimg} />
    </div>
  )
}

export default Map;