import React from "react";
import { useLocation } from "react-router-dom";
import PassengerInfo from "../PassengerInfo/PassengerInfo";
import Header from "../../home_page/components/header";
import airportimage from "./assets/airport1.jpg";

const MainContainer = () => {
  const location = useLocation();
  const flightData = location.state || {};
  console.log("les infos du vol :",flightData)
  
  console.log("le prix :",flightData.price)
  // Fonction pour gérer les données des passagers
   const handlePassengerConfirmation = (passengerData) => {
    // Fusionner les détails du vol et les informations des passagers
    const reservationData = {
      flightDetails: flightData,
      passengers: passengerData,
      VolId : flightData.id,
    };
    
    console.log("Données à envoyer :", reservationData);

    // Envoyer au backend via fetch
    fetch("http://localhost:8090/api/reservations/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Réponse du backend :", data);
        alert("Réservation confirmée avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
        alert("Une erreur est survenue lors de la confirmation.");
      });
  };

  return (
    <>
      <Header />

      <div className="max-w-screen-lg mx-auto bg-white shadow-md overflow-hidden">


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
            {/* Champs pré-remplis */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">De :</label>
              <input
                type="text"
                value={flightData.departureCity || ""}
                readOnly
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">À :</label>
              <input
                type="text"
                value={flightData.arrivalCity || ""}
                readOnly
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">
                Date d'aller :
              </label>
              <input
                type="text"

                value={flightData.departureDate || ""}


                readOnly
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col">

              <label className="font-semibold text-gray-700">Date d' arrivee :</label>
              <input
                type="text"
                value={flightData.returnDate || ""}

                readOnly
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Prix :</label>
              <input
                type="text"
                value={flightData.price || ""}
                readOnly
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
        </div>

        {/* Informations des passagers */}
        <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
          <PassengerInfo flightData={flightData} onConfirm={handlePassengerConfirmation} />
        </div>
      </div>
    </>
  );
};

export default MainContainer;