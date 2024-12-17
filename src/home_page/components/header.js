import iconProfile from "../assets/assetsHeader/icons8-user-100.png";
import iconSettings from "../assets/assetsHeader/icons8-settings-100.png";
import iconAddAccount from "../assets/assetsHeader/add-user.png";
import iconDashboard from "../assets/assetsHeader/icons8-dashboard-100.png";
import iconLogOut from "../assets/assetsHeader/icons8-logout-100.png";
import LogoSite from "../assets/assetsHeader/containerInformation-Photoroom.png";
import "../style/header.css";
import { Link } from "react-router";

let count = 0;
export default function Header() {
  function displayUserSettings() {
    let containerSettings = document.getElementsByClassName(
      "containerSettingsOption"
    );
    if (count === 0) {
      containerSettings[0].style.display = "block";
      count++;
    } else if (count === 1) {
      containerSettings[0].style.display = "none";
      count--;
    }
  }

  return (
    <div className="HeaderContainer">
      <div className="containerLogo">
        <a href="http://localhost:3000/">
          <img src={LogoSite} alt="en-cours" />
        </a>
      </div>
      <div className="containerMenu">
        <ul>
          <li>
            <a href="http://localhost:3000/">Acceuil</a>
          </li>
          <li>
            <a href="http://localhost:3000/reservation">Reservation</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="containerUserSign">
        <div className="ContainerImg">
          <img src={iconProfile} alt="en-cours" onClick={displayUserSettings} />
          <div className="containerSettingsOption">
            <div className="containerUser">
              <div className="containerImageUser">
                <img src={iconProfile} alt="en-cours" />
              </div>
              <div className="containerInformation">
                <h4>bonjour</h4>
                <p>bonjour@gmail.com</p>
              </div>
            </div>
            <hr></hr>
            <div className="containerSettings1">
              <Link to=".">
                <div className="containerProfil">
                  <img src={iconProfile} alt="en-cours" />
                  <p>Profile</p>
                </div>
              </Link>
              <Link to=".">
                <div className="containerSettings">
                  <img src={iconSettings} alt="en-cours" />
                  <p>Paramètres</p>
                </div>
              </Link>
            </div>
            <hr></hr>
            <div className="containerSettings2">
              <Link to=".">
                <div>
                  <img src={iconAddAccount} alt="en-cours" />
                  <p>Ajouter un compte</p>
                </div>
              </Link>
              <Link to="http://localhost:3000/dashboard">
                <div>
                  <img src={iconDashboard} alt="en-cours" />
                  <p>Dashboard</p>
                </div>
              </Link>
            </div>
            <hr></hr>
            <div>
              <div>
                <img src={iconLogOut} alt="en-cours" />
                <p>se déconnecter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ContainerButton">
          <a href="http://localhost:3000/SignUp">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
