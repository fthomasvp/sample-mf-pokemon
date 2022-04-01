import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search-bar/SearchBar";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <SearchBar />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
