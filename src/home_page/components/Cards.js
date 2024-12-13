import { useState } from "react";
import Card from "./card";
import "../style/Cards.css";

export default function Cards() {
  const [numberVol, setNumberVol] = useState(8);
  const ListCard = [];

  for (let i = 0; i < numberVol; i++) {
    ListCard.push(<Card />);
  }

  return (
    <div className="containerCards">
      <div className="container">{ListCard}</div>
      <div className="containerLoadMore">
        <button
          onClick={() => {
            setNumberVol(numberVol + 8);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
