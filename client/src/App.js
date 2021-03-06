import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./components/test";
import Divider from "./components/Divider";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route extact path="/" component={Home} />
        <Route exact path="/Divider" component={Divider} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
