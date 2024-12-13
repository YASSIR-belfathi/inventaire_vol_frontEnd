import ImageBackground from "../assets/assetsHeader/istockphoto-184347141-612x612.jpg";
import "../style/main.css";
import SearchBar from "./searchBar";

export default function Main() {
  return (
    <div className="containerMain">
      <div className="containerMain1">
        <div className="containerImageMain">
          <img alt="en-cours" src={ImageBackground} />
        </div>
        <div className="containerMessage">
          <p>Voyagez vers votre destination</p>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
