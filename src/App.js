import "./App.css";
import Home from "./home_page/Home.js";
import SignUpPage from "./SignUpPage/SignUpPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./Style.css";
import React from "react";
import MainContainer from "./component/MainContainer/MainContainer";
import Login from "./component/Login/Login";
import DashBoardAdmin from "./DashBoardAdmin/DashBoardAdmin.js";
import EditProfil from "./DashBoardAdmin/components/EditProfil.js";
import CreateVol from "./DashBoardAdmin/components/CreateVol.js";
import AddAeroport from "./DashBoardAdmin/components/AddAeroport.js";
import ListVol from "./DashBoardAdmin/components/ListVol.js";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar sera toujours visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          {/* Route par défaut pour la page principale */}
          <Route path="/reservation" element={<MainContainer />} />
          {/* Route pour la page de login */}
          <Route path="/login" element={<Login />} />
          {/* Exemple de dashboard */}
          <Route path="/dashboard" element={<DashBoardAdmin />}>
            <Route path="editProfile" element={<EditProfil />} />
            <Route path="CreateVol" element={<CreateVol />} />

            <Route path="addAeroport" element={<AddAeroport />} />
            <Route path="ListVol" element={<ListVol />} />

          </Route>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
