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
          className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-blue-600 mb-4">
            Passager {index + 1}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor={`lastName-${index}`}
                className="text-gray-700 font-medium mb-1"
              >
                Nom :
              </label>
              <input
                id={`lastName-${index}`}
                type="text"
                placeholder="Entrez le nom"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={passenger.lastName}
                onChange={(e) =>
                  handleInputChange(index, "lastName", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor={`firstName-${index}`}
                className="text-gray-700 font-medium mb-1"
              >
                Prénom :
              </label>
              <input
                id={`firstName-${index}`}
                type="text"
                placeholder="Entrez le prénom"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={passenger.firstName}
                onChange={(e) =>
                  handleInputChange(index, "firstName", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor={`age-${index}`}
                className="text-gray-700 font-medium mb-1"
              >
                Âge :
              </label>
              <input
                id={`age-${index}`}
                type="number"
                min="0"
                placeholder="Entrez l'âge"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={passenger.age}
                onChange={(e) =>
                  handleInputChange(index, "age", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          onClick={handleAddPassenger}
        >
          Ajouter un passager
        </button>

        <button
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
          onClick={handleConfirmation}
        >
          Passer à la confirmation
        </button>
      </div>
    </div>
  );
};

export default PassengerInfo;
