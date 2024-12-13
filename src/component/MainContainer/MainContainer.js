import React from "react";
//import Banner from "../Banner/Banner";
import FlightList from "../FlightList/FlightList";
import PassengerInfo from "../PassengerInfo/PassengerInfo";
import Header from "../../home_page/components/header";

const MainContainer = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image en haut */}
        <div className="h-64 w-full">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2aWF0aW9ufGVufDB8fDB8fHww"
            alt="Bandeau supérieur"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Champs de réservation */}
        <div className="flex items-center justify-between gap-4 p-4 bg-blue-50">
          <div className="flex-1">
            <label className="block text-gray-700">De :</label>
            <input
              type="text"
              placeholder="Ville de départ"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">À :</label>
            <input
              type="text"
              placeholder="Ville d'arrivée"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Date d'aller :</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Date de retour :</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Passagers :</label>
            <input
              type="number"
              min="1"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Liste des vols */}
        <div className="p-4">
          <FlightList />
        </div>

        {/* Informations des passagers */}
        <div className="p-4">
          <PassengerInfo />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
