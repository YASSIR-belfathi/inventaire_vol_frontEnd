import "./App.css";
import Header from "./home_page/components/header.js";
import Main from "./home_page/components/main.js";
import Cards from "./home_page/components/Cards.js";
import Footer from "./home_page/components/Footer.js";
import "./Style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
