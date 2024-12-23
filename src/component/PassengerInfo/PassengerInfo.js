import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";


const PassengerInfo = ({ onConfirm,flightData = {}}) => {
  const [passengers, setPassengers] = useState([{
    first_name: "",
    last_name: "",
    email: "",
    num_pass: "",
    cin: "",
    nationalite: "",
    telephone: "",
    date_naissance: ""
  }]);


  const [allPassengers, setAllPassengers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/api/passengers/get-AllPassagers")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => setAllPassengers(data))
        .catch(error => {
            console.error("Error fetching passengers:", error);
            alert("Erreur lors de la récupération des passagers");
        });
}, []);


  const handleInputChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { firstName: "", lastName: "", age: "" }]);
  };

  const findPassengerIdByName = (firstName, lastName) => {
    console.log('Searching for passenger:', { firstName, lastName });
    console.log('Available passengers:', allPassengers);
    
    const foundPassenger = allPassengers.find(
        p => p.first_name.toLowerCase() === firstName.toLowerCase() &&
             p.last_name.toLowerCase() === lastName.toLowerCase()
    );
    
    console.log('Found passenger:', foundPassenger);
    return foundPassenger ? foundPassenger.id : null;
};

  const handleFinalConfirmation = () => {
    const mainPassengerId = findPassengerIdByName(
      passengers[0].first_name,
      passengers[0].last_name
  );

  if (!mainPassengerId) {
      alert("Le passager principal n'a pas été trouvé dans la base de données");
      return;
  }

  const reservationData = {
      volId: flightData.id,
      passagerId: mainPassengerId,
      prixTotal: parseFloat(flightData.price) * passengers.length,
      additionalPassengers: passengers.map(p => ({
          first_name: p.first_name,
          last_name: p.last_name,
          email: p.email,
          num_pass: parseInt(p.num_pass),
          cin: p.cin,
          nationalite: p.nationalite,
          telephone: parseInt(p.telephone),
          date_naissance: p.date_naissance
      }))
  };

  console.log('Sending Reservation Data:', JSON.stringify(reservationData, null, 2));
  
    fetch("http://localhost:8090/api/reservations/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reservationData)
    })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log("Réservation réussie:", data);
      alert("Réservation réussie!");
    })
    .catch(error => {
      console.error("Erreur:", error);
      alert(`Erreur: ${error.message}`);
    });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Informations des Passagers</h2>
      {passengers.map((passenger, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Prénom"
            value={passenger.first_name}
            onChange={(e) => handleInputChange(index, "first_name", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Nom"
            value={passenger.last_name}
            onChange={(e) => handleInputChange(index, "last_name", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={passenger.email}
            onChange={(e) => handleInputChange(index, "email", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Numéro de passeport"
            value={passenger.num_pass}
            onChange={(e) => handleInputChange(index, "num_pass", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="CIN"
            value={passenger.cin}
            onChange={(e) => handleInputChange(index, "cin", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Nationalité"
            value={passenger.nationalite}
            onChange={(e) => handleInputChange(index, "nationalite", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={passenger.telephone}
            onChange={(e) => handleInputChange(index, "telephone", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={passenger.date_naissance}
            onChange={(e) => handleInputChange(index, "date_naissance", e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <button onClick={handleAddPassenger} className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Ajouter un passager
        </button>
        <button onClick={handleFinalConfirmation} className="btn btn-success bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          Confirmer la réservation
        </button>
      </div>
    </div>
  );
};
PassengerInfo.propTypes = {
  onConfirm: PropTypes.func,
  flightData: PropTypes.shape({
    id: PropTypes.number,
    prix: PropTypes.number
  })
};
export default PassengerInfo;
