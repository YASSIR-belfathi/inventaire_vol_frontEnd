import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../home_page/components/header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Ici, vous pouvez implémenter une logique comme une requête API
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Se connecter</h2>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-600">
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
            <label className="block mb-2 font-medium text-gray-600">
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
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Connexion
          </button>

          <p className="text-center mt-4 text-gray-600">
            Pas encore de compte ?{" "}
            <a href="/SignUp" className="text-blue-500 hover:underline">
              Inscrivez-vous
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
