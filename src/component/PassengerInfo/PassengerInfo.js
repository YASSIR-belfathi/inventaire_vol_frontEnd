import React from "react";

const PassengerInfo = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Informations des passagers</h2>

      {/* Formulaire d'information passager */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Nom :</label>
          <input
            type="text"
            placeholder="Entrez le nom"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Prénom :</label>
          <input
            type="text"
            placeholder="Entrez le prénom"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Âge :</label>
          <input
            type="number"
            min="0"
            placeholder="Entrez l'âge"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>

      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Ajouter passager
      </button>
    </div>
  );
};

export default PassengerInfo;
