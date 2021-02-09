import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Timeline from "./components/Timeline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/timeline">
            <Timeline />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
