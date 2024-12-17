import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../home_page/components/header";
import airlineimage from "./assets/airline.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Stocker temporairement les données pour l'intégration backend
    const userData = { email, password };
    console.log("Données utilisateur : ", userData);

    // Simuler une validation simple
    if (email === "test@example.com" && password === "password") {
      alert("Connexion réussie !");
      navigate("/dashboard");
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <>
      <Header />
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${airlineimage})`,
        }}
      >
        <div className="flex flex-col w-full max-w-4xl p-6 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg md:flex-row">
          {/* Colonne gauche : Formulaire */}
          <form
            className="flex-1 p-6"
            onSubmit={handleLogin}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Connexion</h2>

            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre e-mail"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre mot de passe"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Connexion
            </button>

            <p className="text-gray-600 mt-4">
              Pas encore de compte ?{" "}
              <a href="/SignUp" className="text-blue-500 hover:underline">
                Inscrivez-vous
              </a>
            </p>
          </form>

          {/* Colonne droite : Image ou texte */}
          <div className="hidden md:flex flex-1 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1496284045406-df30a9829b2e?w=1000&auto=format&fit=crop&q=60')",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Login;
