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
      destinationDepart: depart,
      destinationArrivee: destination,
      dateDepart: dateDepart,
      dateArrivee: dateArrivee,
      price: prix,
      id: id, // Utilisation de id au lieu de key
    };

    // Navigate to ReservationForm with state
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
        <a href={lien} onClick={handleReservation}>Réservez</a>
      </div>
    </div>
  );
}
