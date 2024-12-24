import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    const serviceId = "service_h9rk7nv";
    const templateId = "template_7qkhquo";
    const publickey = "fCalqObv_W_UeDV53";

    const templateParam = {
      to_name: "Go flight",
      to_email: "Abderrahimbenaissa15@gmail.com",
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParam, publickey)
      .then((response) => {
        console.log("Email envoyé avec succès", response);
        setEmail("");
        setMessage("");
        alert("Votre message a été envoyé avec succès !");
      })
      .catch((error) => {
        console.log("Erreur lors de l'envoi de l'email", error);
        alert("Une erreur est survenue lors de l'envoi de votre message.");
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Besoin d'aide ? Contactez-nous
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Entrez votre message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
