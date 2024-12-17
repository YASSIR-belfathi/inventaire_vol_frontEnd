import Image from "../assets/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg";

export default function Card({
  depart,
  destination,
  dateDepart,
  dateArrivee,
  prix,
  lien,
}) {
  return (
    <div className="card blockElement">
      <div className="containerImage">
        <img src={Image} alt="en-cours" />
      </div>
      <div className="DestinationDepart">
        <p>{depart}</p>
        <p>{destination}</p>
      </div>
      <div className="DateDepartArrivee">
        <p>{dateDepart} - </p>
        <p>{dateArrivee}</p>
      </div>
      <div className="Price">
        <p>
          <span>Prix:</span>
          {prix}
        </p>
      </div>
      <div className="ReservationButton">
        <a href={lien}>Réservez</a>
      </div>
    </div>
  );
}
