import BreadCrumbs from "./BreadCrumbs";
import "../style/CreateVol.css";

export default function CreateVol() {
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
            <img src="" alt="en-cours" />
          </div>
        </div>
        <div className="editCreationInfo">
          <div className="children1">
            <div className="containerNumberVol">
              <label htmlFor="Number">N°Vol</label>
              <input type="text" id="Number" />
            </div>
            <div className="containerVolIata">
              <label htmlFor="IATA">IATA</label>
              <input type="text" id="IATA" />
            </div>
          </div>
          <div className="children2">
            <div className="containerDateDépart">
              <label htmlFor="DateDepart">Date Départ</label>
              <input type="date" id="DateDepart" />
            </div>
            <div className="containerDateArrivee">
              <label htmlFor="DateArrivee">Date Arrivée</label>
              <input type="date" id="IATA" />
            </div>
          </div>

          <div className="children3">
            <div className="containerAeroportDepart">
              <label htmlFor="Depart">N°Vol</label>
              <select id="Depart">
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
              </select>
            </div>
            <div className="containerAeroportArrivee">
              <label htmlFor="Arrivee">N°Vol</label>
              <select id="Arrivee">
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
              <input type="date" id="Prix" />
            </div>
            <div className="containerCapacitee">
              <label htmlFor="Capacitee">Capacitee</label>
              <input type="date" id="Capacitee" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
