import React, { useState } from "react";

const PassengerInfo = () => {
  const [passengers, setPassengers] = useState([
    { firstName: "", lastName: "", age: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { firstName: "", lastName: "", age: "" }]);
  };

  const handleConfirmation = () => {
    console.log("Passagers enregistrés :", passengers);
    alert("Passagers enregistrés avec succès !");
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Informations des Passagers
      </h2>

      {passengers.map((passenger, index) => (
        <div
          key={index}
          className="mb-6 p-4 border border-gray-200 rounded-lg bg-blue-50"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Passager {index + 1}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-600 font-medium">Nom :</label>
              <input
                type="text"
                placeholder="Entrez le nom"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={passenger.lastName}
                onChange={(e) =>
                  handleInputChange(index, "lastName", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Prénom :</label>
              <input
                type="text"
                placeholder="Entrez le prénom"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={passenger.firstName}
                onChange={(e) =>
                  handleInputChange(index, "firstName", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Âge :</label>
              <input
                type="number"
                min="0"
                placeholder="Entrez l'âge"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={passenger.age}
                onChange={(e) =>
                  handleInputChange(index, "age", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          onClick={handleAddPassenger}
        >
          Ajouter un passager
        </button>

        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition"
          onClick={handleConfirmation}
        >
          Passer à la confirmation
        </button>
      </div>
    </div>
  );
};

export default PassengerInfo;
