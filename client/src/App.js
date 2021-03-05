import React  from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainSidebar from "./components/SideBar/SideBar";
import Team from "./pages/Team";
import "./index.css";

function App() {
  return (
    <Router>
      <MainSidebar />
      <Route exact path='/' component={Home} />
      <Route exact path='/team' component={Team} />
    </Router>
  );
}
export default App;
