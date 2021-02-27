import React from "react";
import Home from "./home";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route extact path="/" component={Home} />
  </Switch>
);

export default Main;
