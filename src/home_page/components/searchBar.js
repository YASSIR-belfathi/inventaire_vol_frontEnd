import { useState } from "react";
import AtterissageVol from "../assets/assetsMain/atterrissage-davion.png";
import DecollageVol from "../assets/assetsMain/decoller-de-lavion.png";
import DateStartIcon from "../assets/assetsMain/calendar.png";
import IconPassager from "../assets/assetsMain/user.png";

export default function SearchBar() {
  const [addPassager, setAddPasseger] = useState(0);

  return (
    <div className="searchBar">
      <div className="containerText">
        <p>Chercher votre vol</p>
      </div>
      <div className="containerArriveStartAero">
        <div className="startingPoint vol">
          <img src={AtterissageVol} alt="en-cours" />
          <select>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
          </select>
        </div>
        <div className="endPoint vol">
          <img src={DecollageVol} alt="en-cours" />
          <select>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
            <option value="test">test</option>
          </select>
        </div>
      </div>
      <div className="containerDate">
        <div className="containerDateDépart Date">
          <img alt="en-cours" src={DateStartIcon} />
          <input type="date" />
        </div>
        <div className="containerDateArrivee Date">
          <img alt="en-cours" src={DateStartIcon} />
          <input type="date" />
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
        <button type="submit">Chercher</button>
      </div>
    </div>
  );
}
