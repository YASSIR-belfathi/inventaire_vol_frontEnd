import Main from "./components/main.js";
import Cards from "./components/Cards.js";
import Footer from "./components/Footer.js";
import Header from "./components/header.js";
import { useLocation } from "react-router";

export default function Home() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Main />
      {location.state === null ? (
        <Cards />
      ) : (
        <Cards
          ListSearchBar={location.state.result}
          executeSearch={location.state.executeSearch}
        />
      )}
      <Footer />
    </>
  );
}
