import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import LogsView from "./components/logs-view"
import Dashboard from "./components/dashboard"

export default function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route path="/home" />
              <Route path="/home" />
              <Route path="/logs" component={LogsView}/>
              <Route path="/dashboard" component={Dashboard}/>
          </Switch>
      </Router>
  );
}

