import { useEffect, useState } from "react";
import IconWeb from "../../home_page/assets/assetsHeader/containerInformation-Photoroom.png";
import axios from "axios";

export default function Form() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [passport, setPassport] = useState("");
  const [CIN, setCIN] = useState("");
  const [nationalite, setNationalite] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [dateNaissance, setNaissance] = useState("");
  const [password, setPassword] = useState("");
  const [validationPassword, setValidationPassword] = useState("");
  const [execute, setExecute] = useState(false);

  function verification() {
    if (
      prenom === "" ||
      nom === "" ||
      passport === "" ||
      CIN === "" ||
      nationalite === "" ||
      telephone === "" ||
      email === "" ||
      dateNaissance === "" ||
      password === "" ||
      validationPassword === ""
    ) {
      alert("il faut saisir tout les champs du formulaire");
      setExecute(false);
    } else {
      if (password !== validationPassword) {
        alert("le mot de passe n'est pas le même");
        setExecute(false);
      } else {
        console.log("bonjour");
        setExecute(true);
      }
    }
  }

  useEffect(() => {
    let passager = {
      name: prenom,
      prenom: nom,
      email: email,
      nationalite: nationalite,
      CIN: CIN,
      numPass: passport,
      DateNaissance: dateNaissance,
      telephone: telephone,
      password: password,
      role: "user",
    };
    console.log(execute);
    if (execute) {
      console.log(execute);
      axios
        .post("http://localhost:8080/api/auth/signup", passager)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
    }
  }, [
    prenom,
    nom,
    email,
    nationalite,
    CIN,
    passport,
    dateNaissance,
    telephone,
    password,
    execute,
  ]);

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
            <input
              type="text"
              id="inputPrenom"
              placeholder="Saisie ici"
              value={prenom}
              onChange={(event) => {
                setPrenom(event.target.value);
              }}
            />
          </div>
          <div className="containerInputNom">
            <label htmlFor="inputNom">Nom</label>
            <input
              type="text"
              id="inputNom"
              placeholder="Saisie ici"
              value={nom}
              onChange={(event) => {
                setNom(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="children2">
          <div className="containerInputPassport">
            <label htmlFor="inputPassport">N°Passport</label>
            <input
              type="text"
              id="inputPassport"
              placeholder="Saisie ici"
              value={passport}
              onChange={(event) => {
                setPassport(event.target.value);
              }}
            />
          </div>
          <div className="containerInputCIN">
            <label htmlFor="inputCIN">N°CIN</label>
            <input
              type="text"
              id="inputCIN"
              placeholder="Saisie ici"
              value={CIN}
              onChange={(event) => {
                setCIN(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="children3">
          <div className="containerInputNationnalite">
            <label htmlFor="inputNationnalite">Nationnalité</label>
            <input
              type="text"
              id="inputNationnalite"
              placeholder="Saisie ici"
              value={nationalite}
              onChange={(event) => {
                setNationalite(event.target.value);
              }}
            />
          </div>
          <div className="containerInputTelephone">
            <label htmlFor="inputTelephone">Telephone</label>
            <input
              type="text"
              id="inputTelephone"
              placeholder="Saisie ici"
              value={telephone}
              onChange={(event) => {
                setTelephone(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="children4">
          <div className="containerEmail">
            <label htmlFor="emailUser">Email</label>
            <input
              type="email"
              id="emailUser"
              placeholder="Saisie ici"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="containerBirthDay">
            <label htmlFor="birthDay">Date de naissance</label>
            <input
              type="date"
              id="birthDay"
              value={dateNaissance}
              onChange={(event) => {
                setNaissance(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="children5">
          <div className="containerInputPassword">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              id="inputPassword"
              placeholder="Saisie ici"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="containerConfirmation">
            <label htmlFor="inputConfirmation">Confirmez Password</label>
            <input
              type="password"
              id="inputConfirmation"
              placeholder="Saisie ici"
              value={validationPassword}
              onChange={(event) => {
                setValidationPassword(event.target.value);
              }}
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
          <button
            onClick={() => {
              verification();
            }}
          >
            Enregistrez
          </button>
        </div>
      </div>
    </div>
  );
}
