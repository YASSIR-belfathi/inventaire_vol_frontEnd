import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./Banner.css";

const Banner = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (from === to) {
      setError("Les villes de départ et d'arrivée ne peuvent pas être identiques.");
      return false;
    }

    if (departureDate && returnDate && new Date(returnDate) <= new Date(departureDate)) {
      setError("La date de retour doit être postérieure à la date d'aller.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate("/confirmation", {
      state: { from, to, departureDate, returnDate, passengers },
    });
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-center mb-6">Réservez votre vol</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Champ "De" */}
            <div>
              <label className="block text-sm font-medium text-gray-700">De :</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Ville de départ"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Champ "À" */}
            <div>
              <label className="block text-sm font-medium text-gray-700">À :</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Ville d'arrivée"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Date d'aller */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Date d'aller :</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Date de retour */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Date de retour :</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Nombre de passagers */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Passagers :</label>
              <input
                type="number"
                value={passengers}
                min="1"
                onChange={(e) => setPassengers(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Affichage des erreurs */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Bouton de soumission */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
