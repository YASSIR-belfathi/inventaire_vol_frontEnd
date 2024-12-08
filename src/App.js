import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import Navbar from "./component/Navbar/Navbar";
//import Banner from "./component/Banner/Banner";
//import FlightList from "./component/FlightList/FlightList";
//import Confirmation from "./component/Confirmation/Confirmation";
import MainContainer from "./component/MainContainer/MainContainer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
     <MainContainer/>
      </div>
    </Router>
  );
}

export default App;
