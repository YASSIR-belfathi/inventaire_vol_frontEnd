import React from "react";

const FlightList = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Liste des vols</h2>

      {/* Exemple d'un vol */}
      <div className="flex items-center justify-between bg-white shadow rounded-lg p-4 mb-4">
        <div>
          <h3 className="text-gray-700 font-bold">Air France - Aller</h3>
          <p className="text-sm text-gray-500">Durée : 3h 25min | Direct</p>
        </div>
        <div>
          <p className="text-gray-700">Départ : 07:25</p>
          <p className="text-gray-700">Arrivée : 10:50</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white shadow rounded-lg p-4">
        <div>
          <h3 className="text-gray-700 font-bold">Air France - Retour</h3>
          <p className="text-sm text-gray-500">Durée : 3h 25min | Direct</p>
        </div>
        <div>
          <p className="text-gray-700">Départ : 07:25</p>
          <p className="text-gray-700">Arrivée : 10:50</p>
        </div>
      </div>
    </div>
  );
};


export default FlightList;
