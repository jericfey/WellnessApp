import React from "react";
import ReactFC from "rect-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainSidebar from "./components/SideBar/SideBar";
import Team from "./pages/Team";
import "./index.css";

function App() {
  return (
    <Router>
      <MainSidebar />
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
    </Router>
  );
}
export default App;
