import Image from "../assets/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg";

export default function Card() {
  return (
    <div className="card blockElement">
      <div className="containerImage">
        <img src={Image} alt="en-cours" />
      </div>
      <div className="DestinationDepart">
        <p>Paris</p>
        <p>Casablanca</p>
      </div>
      <div className="DateDepartArrivee">
        <p>12/12/2024 - </p>
        <p>20/12/2024</p>
      </div>
      <div className="Price">
        <p>
          <span>Prix:</span>2000 DH
        </p>
      </div>
      <div className="ReservationButton">
        <a href="http://localhost:3000">Réservez</a>
      </div>
    </div>
  );
}
