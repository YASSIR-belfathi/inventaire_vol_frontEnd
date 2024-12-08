import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo ou Titre */}
      <div className="text-white text-2xl font-bold">
        <Link to="/" className="hover:text-gray-300">Ma Réservation</Link>
      </div>

      {/* Liens de navigation */}
      <div className="flex space-x-8">
        <Link to="/" className="text-white text-lg font-medium hover:text-gray-300">
          Accueil
        </Link>
        <Link to="/reservation" className="text-white text-lg font-medium hover:text-gray-300">
          Réservation
        </Link>
        <Link to="/contact" className="text-white text-lg font-medium hover:text-gray-300">
          Contact
        </Link>
      </div>

      {/* Bouton d'inscription */}
      <div>
        <button className="bg-white text-blue-700 px-5 py-2 font-semibold rounded-full shadow hover:bg-gray-200">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
