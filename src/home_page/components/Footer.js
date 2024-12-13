import "../style/Footer.css";

export default function Footer() {
  return (
    <div className="containerFooter">
      <div className="titleFooter">
        <p>
          <i>Besoin d'aide? Contactez nous</i>
        </p>
      </div>
      <div className="containerBlock blockElement">
        <div className="containerEmail">
          <input type="email" placeholder="Email" />
        </div>
        <div className="containerMessage">
          <textarea placeholder="Message" />
        </div>
        <div className="containerSubmit">
          <button type="submit">Envoyer</button>
        </div>
      </div>
      <div className="containerCopyRight">
        <i>&copy;CopyRight 2024. All Right Reserved.</i>
      </div>
    </div>
  );
}
