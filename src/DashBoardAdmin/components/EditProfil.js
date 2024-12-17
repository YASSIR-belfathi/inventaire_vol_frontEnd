import BreadCrumbs from "./BreadCrumbs";
import "../style/EditProfil.css";
import LogoButton from "../assets/diskette.png";
import LogoUser from "../assets/profile.png";

export default function EditProfil() {
  return (
    <div className="containerEditProfil">
      <div className="containerBreadCrumbs">
        <BreadCrumbs
          pathName1={"editprofil"}
          link1={"http://localhost:3000/dashboard/EditProfile"}
        />
      </div>
      <hr></hr>
      <div className="containerContent">
        <div className="containerInfoImgUser">
          <div className="containerInfoUser">
            <h1>Edit Profil</h1>
          </div>
          <div className="containerImgUser">
            <img src={LogoUser} alt="en-cours" />
          </div>
          {/* make a button to upload an image for the profil of user */}
        </div>
        <div className="editInfo">
          <div className="childrenEdit">
            <div className="containerFirstName">
              <label htmlFor="FirstName">Prénom</label>
              <input id="FirstName" type="text" />
            </div>
            <div className="containerLastName">
              <label htmlFor="LastName">Nom</label>
              <input id="LastName" type="text" />
            </div>
          </div>
          <div className="childrenEdit">
            <div className="containerPassport">
              <label htmlFor="passport">Passport</label>
              <input type="text" id="passport" />
            </div>
            <div className="containerCIN">
              <label htmlFor="CIN">CIN</label>
              <input type="text" id="CIN" />
            </div>
          </div>

          <div className="childrenEdit">
            <div className="containerNationalite">
              <label htmlFor="nationalite">Nationalité</label>
              <input type="text" id="nationalite" />
            </div>
            <div className="containerTelephone">
              <label htmlFor="Telephone">Telephone</label>
              <input type="text" id="Telephone" />
            </div>
          </div>

          <div className="childrenEdit">
            <div className="containerEmail">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="containerDateNaissance">
              <label htmlFor="DateNaissance">Date-Naissance</label>
              <input type="date" id="DateNaissance" />
            </div>
          </div>

          <div className="childrenEdit">
            <div className="containerPassword">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="containerValidation">
              <label htmlFor="validation">Confirmer Password</label>
              <input type="password" id="validation" />
            </div>
          </div>
          <div className="containerButtonUpdate">
            <button>
              <img src={LogoButton} alt="en-cours" />
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
