import "./App.css";
import Header from "./home_page/components/header.js";
import Home from "./home_page/Home.js";
import SignUpPage from "./SignUpPage/SignUpPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./Style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
