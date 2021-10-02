import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import LogsView from "./components/logs-view";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings"

export default function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/logs" component={LogsView}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/settings" component={Settings}/>
          </Switch>
      </Router>
  );
}

