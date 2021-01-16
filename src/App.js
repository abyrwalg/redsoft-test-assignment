import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import ShowCase from "./components/ShowCase/ShowCase";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Header position="bottom" />
      <ShowCase />
    </React.Fragment>
  );
}

export default App;
