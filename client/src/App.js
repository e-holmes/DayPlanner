import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <Router>
        <Navbar
          title="Day Planner"
        ></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch>
      </Router>
  );
}

export default App;
