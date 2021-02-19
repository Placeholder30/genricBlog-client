import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import ProtectedRoute from "./components/partials/ProtectedRoute";
import Timeline from "./components/pages/Timeline";
import CreatePost from "./components/pages/CreatePost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage setAuthStatus={setAuthStatus} />
          </Route>

          <Route exact path="/timeline">
            <ProtectedRoute
              authStatus={authStatus}
              setAuthStatus={setAuthStatus}
              component={Timeline}
            />
          </Route>
          <Route exact path="/createpost">
            <ProtectedRoute
              authStatus={authStatus}
              setAuthStatus={setAuthStatus}
              component={CreatePost}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
