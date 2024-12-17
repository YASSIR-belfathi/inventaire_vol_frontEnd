import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg";

export default function Card() {
  const navigate = useNavigate();
  
  const handleReservation = () => {
    const flightData = {
      departureCity: "Paris",
      arrivalCity: "Casablanca",
      departureDate: "2024-12-12",
      returnDate: "2024-12-20",
      price: "2000 DH",
    };

    navigate("/reservation", { state: flightData });
  };

  return (
    <div className="card blockElement">
      <div className="containerImage">
        <img src={Image} alt="en-cours" />
      </div>
      <div className="DestinationDepart">
        <p>Paris</p>
        <p>Casablanca</p>
      </div>
      <div className="DateDepartArrivee">
        <p>12/12/2024 - </p>
        <p>20/12/2024</p>
      </div>
      <div className="Price">
        <p>
          <span>Prix:</span> 2000 DH
        </p>
      </div>
      <div className="ReservationButton">
        <button onClick={handleReservation} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Réservez</button>
      </div>
    </div>
  );
}
