import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteWrapper from "./Routes/RouteWrapper";

const App = () => {
  return (
    <Router>
      <div>
        <RouteWrapper />
      </div>
    </Router>
  );
};

export default App;