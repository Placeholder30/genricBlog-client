import React from "react";
import { Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, authStatus }) {
  if (authStatus) {
    return (
      <>
        <Component />
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default ProtectedRoute;
