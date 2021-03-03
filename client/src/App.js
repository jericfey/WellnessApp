import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./pages/Home";
import MainSidebar from "./components/pages/SideBar";
import Articles from "./components/pages/articles";
import "./index.css";
function App() {
  return (
    <Router>
      <MainSidebar />
      <Home />
      <Team />
      <Articles />
    </Router>

  );
}
export default App;

