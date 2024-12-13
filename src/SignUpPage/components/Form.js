import IconWeb from "../../home_page/assets/assetsHeader/containerInformation-Photoroom.png";

export default function Form() {
  return (
    <div className="containerForm">
      <div className="containerHeader">
        <a href="http://localhost:3000/">
          <img src={IconWeb} alt="en-cours" />
        </a>
      </div>
      <h1>Bienvenue!</h1>
      <div className="containerBlock">
        <div className="containerTitle">
          <h1>Création du Compte</h1>
        </div>
        <div className="children1">
          <div className="containerInputPrenom">
            <label htmlFor="inputPrenom">Prénom</label>
            <input type="text" id="inputPrenom" placeholder="Saisie ici" />
          </div>
          <div className="containerInputNom">
            <label htmlFor="inputNom">Nom</label>
            <input type="text" id="inputNom" placeholder="Saisie ici" />
          </div>
        </div>
        <div className="children2">
          <div className="containerInputPassport">
            <label htmlFor="inputPassport">N°Passport</label>
            <input type="text" id="inputPassport" placeholder="Saisie ici" />
          </div>
          <div className="containerInputCIN">
            <label htmlFor="inputCIN">N°CIN</label>
            <input type="text" id="inputCIN" placeholder="Saisie ici" />
          </div>
        </div>
        <div className="children3">
          <div className="containerInputNationnalite">
            <label htmlFor="inputNationnalite">Nationnalité</label>
            <input
              type="text"
              id="inputNationnalite"
              placeholder="Saisie ici"
            />
          </div>
          <div className="containerInputTelephone">
            <label htmlFor="inputTelephone">Telephone</label>
            <input type="text" id="inputTelephone" placeholder="Saisie ici" />
          </div>
        </div>
        <div className="children4">
          <div className="containerEmail">
            <label htmlFor="emailUser">Email</label>
            <input type="email" id="emailUser" placeholder="Saisie ici" />
          </div>
          <div className="containerBirthDay">
            <label htmlFor="birthDay">Date de naissance</label>
            <input type="date" id="birthDay" />
          </div>
        </div>
        <div className="children5">
          <div className="containerInputPassword">
            <label htmlFor="inputPassword">Password</label>
            <input type="text" id="inputPassword" placeholder="Saisie ici" />
          </div>
          <div className="containerConfirmation">
            <label htmlFor="inputConfirmation">Confirmez Password</label>
            <input
              type="text"
              id="inputConfirmation"
              placeholder="Saisie ici"
            />
          </div>
        </div>

        <hr></hr>

        <div className="containerOption">
          <div className="firstOption">
            <input type="checkbox" id="checkedFirst" />
            <label htmlFor="checkedFirst">
              J’accepte les conditions du programme.
            </label>
          </div>
          <div className="secondOption">
            <input type="checkbox" id="checkedSecond" />
            <label htmlFor="checkedSecond">
              J’accepte de recevoir des mails des offres et promotions.
            </label>
          </div>
        </div>

        <div className="containerSubmitButton">
          <button>Enregistrez</button>
        </div>
      </div>
    </div>
  );
}
