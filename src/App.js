import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Timeline from "./components/Timeline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage setAuthStatus={setAuthStatus} />
          </Route>
          <Route path="/timeline">
            <ProtectedRoute authStatus={authStatus}>
              <Timeline />
            </ProtectedRoute>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
