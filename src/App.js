import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import ProtectedRoute from "./components/partials/ProtectedRoute";
import Timeline from "./components/pages/Timeline";
import CreatePost from "./components/pages/CreatePost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [authStatus, setAuthStatus] = useState(getLocalAuthStatus());
  const [authToken, setAuthToken] = useState(getLocalToken);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage
              setAuthStatus={setAuthStatus}
              setAuthToken={setAuthToken}
            />
          </Route>

          <Route exact path="/timeline">
            <ProtectedRoute
              authStatus={authStatus}
              setAuthStatus={setAuthStatus}
              authToken={authToken}
              component={Timeline}
            />
          </Route>
          <Route exact path="/createpost">
            <ProtectedRoute
              authToken={authToken}
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

function getLocalAuthStatus() {
  let auth = sessionStorage.getItem("authStatus");
  if (auth === "true") {
    return true;
  } else {
    return false;
  }
}
function getLocalToken() {
  let token = sessionStorage.getItem("authToken");
  if (token) {
    return token;
  } else return "";
}
export default App;
