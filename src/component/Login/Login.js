import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../home_page/components/header";
import airlineimage from "./assets/airline.jpg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log("Données utilisateur : ", userData);

    axios
      .post("http://localhost:8080/api/auth/login", userData)
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("authen_jwt", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        alert(error.code);
      });
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
        <div className="flex flex-col w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg">
          {/* Formulaire */}
          <form className="p-6" onSubmit={handleLogin}>
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
        </div>
      </div>
    </>
  );
};

export default Login;
