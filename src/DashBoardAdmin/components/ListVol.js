import BreadCrumbs from "./BreadCrumbs";
import "../style/ListVol.css";
import VolLogo from "../assets/Airplane_Right_Red_26360 (2).png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListVol() {
  const [ListVol, setListVol] = useState([]);
  const [executeDelete, setExecuteDelete] = useState(false);
  // const [elementVol, setElemetVol] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/vols/get-vols")
      .then((response) => response.json())
      .then((data) => {
        setListVol(data);
      });
  }, []);

  function handleDelete(elementVol) {
    if (executeDelete && elementVol !== null) {
      axios
        .delete(
          "http://localhost:8080/api/vols/delete-vol/".concat(
            `${elementVol.id}`
          )
        )
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    }
  }

  // function handleModification(element) {}

  let ListVolElement = ListVol.map((element) => {
    let date_depart = new Date(element.date_vol_depart).toLocaleDateString(
      "en-GB"
    );
    let date_arrivee = new Date(element.date_vol_arrive).toLocaleDateString(
      "en-GB"
    );

    return (
      <div className="containerVol">
        <div className="containerDestinationDepart">
          <div className="containerDepart">
            <p>{element.aeroport_depart}</p>
            <p>{date_depart}</p>
          </div>
          <div className="containerImage">
            <img
              style={{ width: "100px", height: "100px" }}
              src={VolLogo}
              alt="en-cours"
            />
          </div>
          <div className="containerDestination">
            <p>{element.aeroport_arrive}</p>
            <p>{date_arrivee}</p>
          </div>
        </div>
        <div className="containerButton">
          <button
            className="buttonModify"
            onClick={() => {
              // handleModification(element);
            }}
          >
            Modify
          </button>
          <button
            onClick={() => {
              setExecuteDelete(true);
              handleDelete(element);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="containerListVol">
      <div className="containerBreadCrumbs">
        <BreadCrumbs
          pathName4={"ListVol"}
          link4={"http://localhost:3000/dashboard/ListVol"}
        />
      </div>
      <hr></hr>
      <div className="containerContent">
        <div className="containerTitle">
          <h1>List Vol</h1>
        </div>
        <div className="containerList">{ListVolElement}</div>
      </div>
    </div>
  );
}
