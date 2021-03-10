import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import "./index.css";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>
  );
}
export default App;
