import BreadCrumbs from "./BreadCrumbs";
import "../style/AddAeroport.css";
import LogoSave from "../assets/diskette.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddAeroport() {
  const [Aeroport, setAeroport] = useState({
    Nom: "",
    IATA: "",
    Ville: "",
    Pays: "",
    Capacitee: "",
  });

  const [execute, setExecute] = useState(false);

  function sendInfoAeroport() {
    if (
      Aeroport.Nom === "" ||
      Aeroport.IATA === "" ||
      Aeroport.Ville === "" ||
      Aeroport.Pays === "" ||
      Aeroport.Capacitee === ""
    ) {
      alert("vous devez saisir tous les champs");
      setExecute(false);
    } else {
      setExecute(true);
    }
  }

  useEffect(() => {
    let dataAeroport = {
      aeoroport_IATA: Aeroport.IATA,
      nom_aeroport: Aeroport.Nom,
      ville: Aeroport.Ville,
      pays: Aeroport.Pays,
      capacite: Aeroport.Capacitee,
    };

    if (execute) {
      axios
        .post("http://localhost:8080/api/admin/aeroports/create", dataAeroport)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
    }
  }, [execute, Aeroport]);

  return (
    <div className="containerAddAeroport">
      <div className="containerBreadCrumbs">
        <BreadCrumbs
          pathName3="AddAeroport"
          link3="http://localhost:3000/dashboard/addAeroport"
        />
      </div>
      <hr></hr>
      <div className="containerContent">
        <div className="containerTitle">
          <h1>AddAeroport</h1>
        </div>
        <div className="containerEditInfo">
          <div className="children">
            <div className="containerNom">
              <label htmlFor="Nom">Nom Aeroport</label>
              <input
                type="text"
                id="Nom"
                value={Aeroport.Nom}
                onChange={(event) => {
                  setAeroport({ ...Aeroport, Nom: event.target.value });
                }}
              />
            </div>
            <div className="containerIATA">
              <label htmlFor="IATA">IATA</label>
              <input
                type="text"
                id="IATA"
                value={Aeroport.IATA}
                onChange={(event) => {
                  setAeroport({ ...Aeroport, IATA: event.target.value });
                }}
              />
            </div>
          </div>

          <div className="children">
            <div className="containerVille">
              <label htmlFor="Ville">Ville</label>
              <select
                id="Ville"
                value={Aeroport.Ville}
                onChange={(event) => {
                  setAeroport({ ...Aeroport, Ville: event.target.value });
                }}
              >
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
              </select>
            </div>
            <div className="containerPays">
              <label htmlFor="Pays">pays</label>
              <select
                id="Pays"
                value={Aeroport.Pays}
                onChange={(event) => {
                  setAeroport({ ...Aeroport, Pays: event.target.value });
                }}
              >
                <option value={"test"}>test</option>
                <option value={"test"}>test</option>
                <option value={"test"}>test</option>
                <option value={"test"}>test</option>
              </select>
            </div>
          </div>
          <div className="children4">
            <div className="containerCapacitee">
              <label htmlFor="Capacitee">Capacitée</label>
              <input
                type="number"
                id="Capacitee"
                value={Aeroport.Capacitee}
                onChange={(event) => {
                  setAeroport({ ...Aeroport, Capacitee: event.target.value });
                }}
              />
            </div>
          </div>

          <div className="continainerButtonSubmit">
            <button
              onClick={() => {
                sendInfoAeroport();
              }}
            >
              <img src={LogoSave} alt="en-cours" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
