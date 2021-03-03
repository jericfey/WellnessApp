import React from "react";
import Home from "../../pages/Home";
import { Switch, Route } from "react-router-dom";
import { Sidebar } from "semantic-ui-react";
import Sidebar from "./SideBar";
import "./app.css";

const Main = () => (
  <Switch>
    <Route path="/" component={Sidebar} />
    <Route path="/" component={Articles} />
    <Route extact path="/" component={Home} />
  </Switch>
);

export default Main;
