import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Timeline from "./components/Timeline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/timeline">
            <ProtectedRoute>
              <Timeline />
            </ProtectedRoute>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
