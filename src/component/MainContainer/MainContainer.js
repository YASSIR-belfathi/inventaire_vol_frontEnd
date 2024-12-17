import React from "react";
import { useLocation } from "react-router-dom";
import PassengerInfo from "../PassengerInfo/PassengerInfo";
import Header from "../../home_page/components/header";
import airportimage from "./assets/airport1.jpg";
const MainContainer = () => {
  const location = useLocation();
  const flightData = location.state || {};

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto bg-white shadow-md overflow-hidden mt-8">
        {/* Image en haut */}
        <div className="relative">
          <img
            src={airportimage}
            alt="Bandeau supérieur"
            className="object-cover w-full h-64"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-transparent to-transparent opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white shadow-lg">
              Préparez votre voyage !
            </h1>
          </div>
        </div>

        {/* Champs de réservation */}
        <div className="bg-white p-6 shadow-lg rounded-lg m-7">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Détails de votre réservation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">De :</label>
              <input
                type="text"
                placeholder="Ville de départ"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={flightData.departureCity || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">À :</label>
              <input
                type="text"
                placeholder="Ville d'arrivée"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={flightData.arrivalCity || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">
                Date d'aller :
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={flightData.departureDate || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">
                Date de retour :
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={flightData.returnDate || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Prix :</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                value={flightData.price || ""}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Informations des passagers */}
        <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
          <PassengerInfo />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
