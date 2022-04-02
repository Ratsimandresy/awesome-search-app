import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import Footer from "./components/Footer/Index";
import Content from "./components/Content/Index";
import Searchbox from "./components/SearchBox/Index";
import "./App.css";

const searchClient = algoliasearch(
  process.env.REACT_APP_ID,
  process.env.REACT_APP_API_KEY
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
  }, []);
  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  }, []);
  return (
    <div className="App">
      <InstantSearch searchClient={searchClient} indexName="dev_contact">
        <header className="header">
          <h1>Awesome Search</h1>
          <Searchbox />
        </header>
        <main>
          <Content />
        </main>
        <Footer />
      </InstantSearch>
    </div>
  );
};

export default App;
