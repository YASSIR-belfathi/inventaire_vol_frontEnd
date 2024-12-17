import { useEffect, useState } from "react";
import Card from "./card";
import "../style/Cards.css";
import axios from "axios";

let counter = 0;

export default function Cards() {
  const [ListCard, setListCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/vols/get-vols")
      .then((response) => response.json())
      .then((result) => console.log(setListCard(result)));
  }, []);

  console.log(ListCard[0]);

  function displayButton(element) {
    const button_display = document.getElementsByClassName("buttonLoadMore")[0];
    if (ListCard.length < 8 || element === ListCard.length) {
      button_display.style.display = "none";
    } else {
      button_display.style.display = "block";
    }
  }

  const [numberVol, setNumberVol] = useState(8);

  const ListCardElement = ListCard.map((element) => {
    let date_depart = new Date(element.date_vol_depart).toLocaleDateString(
      "en-GB"
    );
    let date_arrivee = new Date(element.date_vol_arrive).toLocaleDateString(
      "en-GB"
    );

    console.log(date_depart, date_arrivee);

    return (
      <Card
        depart={element.aeroport_depart}
        destination={element.aeroport_arrive}
        prix={element.prix_vol}
        dateDepart={date_depart}
        dateArrivee={date_arrivee}
        key={element.id}
      />
    );
  });

  const ListCardDisplay = [];
  for (let i = 0; i < numberVol; i++) {
    ListCardDisplay.push(ListCardElement[i]);
  }

  function FirstDisplay() {
    if (ListCard.length <= 8) {
      return "";
    } else {
      const buttons = [
        <button
          onClick={() => {
            setNumberVol(numberVol + 8);
            displayButton(numberVol);
          }}
          className="buttonLoadMore"
        >
          Load More
        </button>,
      ];
      return buttons[0];
    }
  }

  return (
    <div className="containerCards">
      <div className="container">{ListCardDisplay}</div>
      <div className="containerLoadMore">
        <FirstDisplay />
      </div>
    </div>
  );
}
