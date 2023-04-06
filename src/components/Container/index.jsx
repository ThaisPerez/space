import "./styles.css";
import Backgroud from "./../../assets/backgroud.svg";
import Astronauta from "./../../assets/astronauta.svg"

export default function todo() {
  return (
    <div className="Container">
    <div className="img-fundo">
      <img src={Backgroud} alt="" />
     <div className="logo">
        <img src={Astronauta} alt="" />
      </div>

      </div>
    </div>
  );
}
