import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import GlobalErrorBoundary from "./utils/error-boundaries/GlobalErrorBoundary";
import "./index.css";
const SearchBar = React.lazy(() => import("lookup/SearchBar"));

const App = () => (
  <div className="container">
    <h4>Olá!</h4>
    <Suspense fallback={<span>Carregando...</span>}>
      <GlobalErrorBoundary>
        <SearchBar />
      </GlobalErrorBoundary>
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
