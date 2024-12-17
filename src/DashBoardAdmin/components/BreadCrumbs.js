import { Link } from "react-router";
import "../style/BreadCrumbs.css";

export default function BreadCrumbs(props) {
  let ListLinks = [];
  let count_iteration = 0;
  let j = 0;
  let Props_Entries = Object.entries(props);
  let attribut_link = [];

  for (let i = 0; i < Props_Entries.length; i++) {
    if (count_iteration === 0) {
      attribut_link.push(Props_Entries[j][1]);
      count_iteration = count_iteration + 1;
    } else if (count_iteration === 1) {
      attribut_link.push(Props_Entries[j][1]);
      ListLinks.push(
        <Link key={j} to={attribut_link[1]}>
          {attribut_link[0]}&gt;
        </Link>
      );
      attribut_link = {};
      count_iteration -= 1;
    }
    j++;
  }

  return (
    <div className="containerBreadCrumbs">
      <Link to="http://localhost:3000/dashboard" className="link0">
        dashBoard
      </Link>
      &gt;
      {ListLinks}
    </div>
  );
}
