import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/Home";
import Sidebar from "./components/pages/SideBar";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sidebar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
