import { useState } from "react";
import AtterissageVol from "../assets/assetsMain/atterrissage-davion.png";
import DecollageVol from "../assets/assetsMain/decoller-de-lavion.png";
import DateStartIcon from "../assets/assetsMain/calendar.png";
import IconPassager from "../assets/assetsMain/user.png";
import { useNavigate } from "react-router";
// import { ListCard } from "./Cards";

export default function SearchBar() {
  const [addPassager, setAddPasseger] = useState(0);
  const [atterrissage, setAtterissage] = useState("");
  const [Decollage, setDecollage] = useState("");
  const [dateStart, setDateStart] = useState("jj-mm-aaaa");
  const [dateArrive, setDateArrive] = useState("jj-m-aaaa");
  const navigate = useNavigate();
  let executeSearch = false;

  function searchVol() {
    if (atterrissage !== Decollage) {
      executeSearch = true;
      fetch("http://localhost:8080/api/vols/get-vols")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          const result = json.filter((vol) => {
            let resultFilter =
              vol &&
              vol.aeroport_depart.includes(Decollage) &&
              vol.aeroport_arrive.includes(atterrissage) &&
              vol.date_vol_depart.includes(dateStart) &&
              vol.date_vol_arrive.includes(dateArrive) &&
              vol.capacite >= addPassager;
            return resultFilter;
          });
          navigate("/", { state: { result, executeSearch, update: true } });
        });
    } else {
      alert(
        "le nom de la ville de destination doît être différent de celui de la ville de départ"
      );
    }
  }

  function annulerSearch() {
    executeSearch = false;
    navigate("/", { state: { result: [], executeSearch } });
  }

  let ListVille = ["Casablanca", "Paris", "Roma", "Tanger", "Beni-Mellal"];

  ListVille = ListVille.map((element) => {
    return element.toUpperCase();
  });

  let i = 0;

  let ListOptionVille = ListVille.map((element) => {
    i++;
    return (
      <option value={element} key={i}>
        {element}
      </option>
    );
  });

  return (
    <div className="searchBar">
      <div className="containerText">
        <p>Chercher votre vol</p>
      </div>
      <div className="containerArriveStartAero">
        <div className="startingPoint vol">
          <img src={AtterissageVol} alt="en-cours" />
          <select
            value={atterrissage}
            onChange={(event) => {
              setAtterissage(event.target.value);
            }}
          >
            <option value="" selected disabled>
              Destination...
            </option>
            {ListOptionVille}
          </select>
        </div>
        <div className="endPoint vol">
          <img src={DecollageVol} alt="en-cours" />
          <select
            value={Decollage}
            onChange={(event) => {
              setDecollage(event.target.value);
            }}
          >
            <option value="" selected disabled>
              Depart...
            </option>
            {ListOptionVille}
          </select>
        </div>
      </div>
      <div className="containerDate">
        <div className="containerDateDépart Date">
          {/* <img alt="en-cours" src={DateStartIcon} /> */}
          <input
            type="date"
            value={dateStart}
            onChange={(event) => {
              setDateStart(event.target.value);
            }}
          />
        </div>
        <div className="containerDateArrivee Date">
          {/* <img alt="en-cours" src={DateStartIcon} /> */}
          <input
            type="date"
            value={dateArrive}
            onChange={(event) => {
              setDateArrive(event.target.value);
            }}
          />
        </div>
        <div className="containerAddPassager">
          <img src={IconPassager} alt="en-cours" />
          <div className="addPassager">
            <p>{addPassager}</p>
            <div className="containerButton">
              <button
                onClick={() => {
                  setAddPasseger(addPassager + 1);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  if (addPassager > 0) {
                    setAddPasseger(addPassager - 1);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="containerButtonSubmit">
        <button type="submit" onClick={searchVol}>
          Chercher
        </button>
        <button onClick={annulerSearch}>Annuler</button>
      </div>
    </div>
  );
}
