import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import "./index.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
    </Router>
  );
}
export default App;
