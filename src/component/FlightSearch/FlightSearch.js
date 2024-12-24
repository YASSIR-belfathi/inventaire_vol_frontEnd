import React, { useState, useEffect } from "react";

const FlightSearch = ({ onFlightSelect }) => {
  const [flights, setFlights] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/vols/get-vols")
      .then((response) => response.json())
      .then((data) => setFlights(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Rechercher un vol
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Ville de départ"
          value={searchCriteria.departureCity}
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              departureCity: e.target.value,
            })
          }
          className="border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Ville d'arrivée"
          value={searchCriteria.arrivalCity}
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              arrivalCity: e.target.value,
            })
          }
          className="border border-gray-300 rounded-lg p-2"
        />
        <input
          type="date"
          value={searchCriteria.departureDate}
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              departureDate: e.target.value,
            })
          }
          className="border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="mt-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="border p-4 rounded-lg mb-2 hover:bg-gray-50 cursor-pointer"
            onClick={() => onFlightSelect(flight)}
          >
            <p>
              De: {flight.destinationDepart} - À: {flight.destinationArrivee}
            </p>
            <p>
              Date: {flight.dateDepart} - Prix: {flight.prix}€
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;
