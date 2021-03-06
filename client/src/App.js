import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Modal from "./components/Modal";
import "./index.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/Modal" component={Modal} />
    </Router>
  );
}
export default App;
