import { useState } from "react";
import "../style/Footer.css";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  function handleSubmit() {
    const serviceId = "service_h9rk7nv";
    const templateId = "template_7qkhquo";
    const publickey = "fCalqObv_W_UeDV53";

    const templateParam = {
      to_name: "Go flight",
      from_email: email,
      message: Message,
    };

    emailjs
      .send(serviceId, templateId, templateParam, publickey)
      .then((response) => {
        console.log("Email was send successefully", response);
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sendin email", error);
      });
  }

  return (
    <div className="containerFooter">
      <div className="titleFooter">
        <p>
          <i>Besoin d'aide? Contactez nous</i>
        </p>
      </div>
      <div className="containerBlock blockElement">
        <div className="containerEmail">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="containerMessage">
          <textarea
            placeholder="Message"
            value={Message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </div>
        <div className="containerSubmit">
          <button type="submit" onClick={handleSubmit}>
            Envoyer
          </button>
        </div>
      </div>
      <div className="containerCopyRight">
        <i>&copy;CopyRight 2024. All Right Reserved.</i>
      </div>
    </div>
  );
}
