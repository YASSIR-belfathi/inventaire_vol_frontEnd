import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg";

export default function Card({
  id, // Renommé de key à id
  depart,
  destination,
  dateDepart,
  dateArrivee,
  prix,
  lien,
 }) {


  const navigate = useNavigate();

  const handleReservation = () => {
    const flightData = {

      departureCity: depart,
      arrivalCity: destination,
      departureDate: dateDepart,
      returnDate: dateArrivee,
      price: prix,
    };
    console.log("les infos du vol :",flightData)
    navigate("/reservation", { state: flightData });
  };

  return (
    <div className="card blockElement">
      <div className="containerImage">
        <img src={Image} alt="en-cours" />
      </div>
      <div className="DestinationDepart">
        <p>{depart}</p>
        <p>{destination}</p>
      </div>
      <div className="DateDepartArrivee">
        <p>{dateDepart} - </p>
        <p>{dateArrivee}</p>
      </div>
      <div className="Price">
        <p>
          <span>Prix:</span>
          {prix}
        </p>
      </div>
      <div className="ReservationButton">

        <button
          onClick={handleReservation}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Réservez
        </button>
      </div>
    </div>
  );
}
