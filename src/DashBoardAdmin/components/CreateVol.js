import BreadCrumbs from "./BreadCrumbs";
import "../style/CreateVol.css";
import LogoUser from "../assets/diskette.png";
import ImgTest from "../../home_page/assets/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CreateVol() {
  const [Number, setNumber] = useState("");
  const [IATA, setIATA] = useState("");
  const [DateDepart, setDateDepart] = useState("");
  const [DateArrivee, setDateArrivee] = useState("");
  const [AeroportArrivee, setAeroportArrivee] = useState("");
  const [AeroportDepart, setAeroportDepart] = useState("");
  const [Prix, setPrix] = useState("");
  const [Capacitee, setCapacitee] = useState("");
  const [execute, setExecute] = useState(false);

  function CreateVol() {
    if (
      Number === "" ||
      IATA === "" ||
      DateDepart === "" ||
      DateArrivee === "" ||
      AeroportDepart === "" ||
      AeroportArrivee === "" ||
      Prix === "" ||
      Capacitee === ""
    ) {
      alert("vous devez saisir tous les champs disponible");
      setExecute(false);
    } else {
      setExecute(true);
    }
  }

  useEffect(() => {
    if (execute) {
      let volInfo = {
        num_vol: Number,
        vol_IATA: IATA,
        date_vol_depart: DateDepart,
        date_vol_arrive: DateArrivee,
        aeroport_depart: AeroportDepart,
        aeroport_arrive: AeroportArrivee,
        prix_vol: Prix,
        capacite: Capacitee,
      };

      axios
        .post("http://localhost:8080/api/vols/add-vols", volInfo)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
    }
  }, [
    Number,
    IATA,
    DateDepart,
    DateArrivee,
    AeroportDepart,
    AeroportArrivee,
    Prix,
    Capacitee,
    execute,
  ]);

  return (
    <div className="containerCreateVol">
      <div className="containerBreadCrumbs">
        <BreadCrumbs
          pathName2="CreateVol"
          link2="http://localhost:3000/dashboard/CreateVol"
        />
      </div>
      <hr></hr>
      <div className="containerContaintCreation">
        <div className="containerTitleCreate">
          <div className="contaierTitle">
            <h1>Creation Vol</h1>
          </div>
          <div className="containerImg">
            <img src={ImgTest} alt="en-cours" />
          </div>
        </div>
        <div className="editCreationInfo">
          <div className="children1">
            <div className="containerNumberVol">
              <label htmlFor="Number">N°Vol</label>
              <input
                type="text"
                id="Number"
                value={Number}
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
              />
            </div>
            <div className="containerVolIata">
              <label htmlFor="IATA">IATA</label>
              <input
                type="text"
                id="IATA"
                value={IATA}
                onChange={(event) => {
                  setIATA(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="children2">
            <div className="containerDateDépart">
              <label htmlFor="DateDepart">Date Départ</label>
              <input
                type="date"
                id="DateDepart"
                value={DateDepart}
                onChange={(event) => {
                  setDateDepart(event.target.value);
                }}
              />
            </div>
            <div className="containerDateArrivee">
              <label htmlFor="DateArrivee">Date Arrivée</label>
              <input
                type="date"
                id="IATA"
                value={DateArrivee}
                onChange={(event) => {
                  setDateArrivee(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="children3">
            <div className="containerAeroportDepart">
              <label htmlFor="Depart">AeroportDepart</label>
              <select
                id="Depart"
                value={AeroportDepart}
                onChange={(event) => {
                  setAeroportDepart(event.target.value);
                }}
              >
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
              </select>
            </div>
            <div className="containerAeroportArrivee">
              <label htmlFor="Arrivee">AeroportArrivee</label>
              <select
                id="Arrivee"
                value={AeroportArrivee}
                onChange={(event) => {
                  setAeroportArrivee(event.target.value);
                }}
              >
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
              </select>
            </div>
          </div>

          <div className="children4">
            <div className="containerPrix">
              <label htmlFor="Prix">Prix</label>
              <input
                type="text"
                id="Prix"
                value={Prix}
                onChange={(event) => {
                  setPrix(event.target.value);
                }}
              />
            </div>
            <div className="containerCapacitee">
              <label htmlFor="Capacitee">Capacitee</label>
              <input
                type="number"
                id="Capacitee"
                value={Capacitee}
                onChange={(event) => {
                  setCapacitee(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="containerButtonCreate">
            <button
              onClick={() => {
                CreateVol();
              }}
            >
              <img src={LogoUser} alt="en-cours" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
