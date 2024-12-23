import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message envoyé avec succès !");
    // Here you can add the logic to send the form data to the backend
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          rows="5"
        />
        <button type="submit" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactUs;