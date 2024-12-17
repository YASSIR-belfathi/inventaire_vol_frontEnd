import LogoUser from "../../home_page/assets/assetsHeader/icons8-user-100.png";
import LogoWebSite from "../assets/Copie de containerInformation-Photoroom.png";
import "../style/HeaderAdmin.css";
import volImg from "../assets/vol (1).png";
import user from "../assets/user.png";
import airport from "../assets/airport (1).png";
import listVol from "../assets/list.png";
import listAirport from "../assets/clipboard.png";
import logout from "../assets/exit.png";

export default function HeaderAdmin() {
  return (
    <div className="containerHeaderAdmin">
      <div className="containerImgLogo">
        <img src={LogoWebSite} alt="en-cours" className="imgUser" />
        <img src={LogoUser} alt="en-cours" className="imglogo" />
      </div>
      <hr></hr>
      <div className="containerOption">
        <a href="http://localhost:3000/dashboard/editProfile">
          <div className="Option1">
            <img src={user} alt="en-cours" />
            <p>Edit profile</p>
          </div>
        </a>
        <a href="#">
          <div className="Option2">
            <img src={volImg} alt="en-cours" />
            <p>Creation Vol</p>
          </div>
        </a>
        <a href="#">
          <div className="Option3">
            <img src={airport} alt="en-cours" />
            <p>Creation Aeroport</p>
          </div>
        </a>
        <a href="#">
          <div className="Option4">
            <img src={listVol} alt="en-cours" />
            <p>List Vol</p>
          </div>
        </a>
        <a href="#">
          <div className="Option5">
            <img src={listAirport} alt="en-cours" />
            <p>List Aeroport</p>
          </div>
        </a>
      </div>
      <hr></hr>
      <div className="containerOtherOption">
        <a href="http://localhost:3000/" className="linkDiscount">
          <div className="containerDiscount">
            <img src={logout} alt="en-cours" />
            <p>Discount</p>
          </div>
        </a>
      </div>
    </div>
  );
}
