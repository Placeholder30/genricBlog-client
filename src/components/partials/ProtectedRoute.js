import React from "react";
import { Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, authStatus, setAuthStatus }) {
  if (authStatus) {
    return <Component authStatus={authStatus} setAuthStatus={setAuthStatus} />;
  } else {
    return <Redirect to="/" />;
  }
}

export default ProtectedRoute;
