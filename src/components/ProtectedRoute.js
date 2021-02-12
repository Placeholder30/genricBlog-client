import React from "react";
import { Redirect } from "react-router-dom";
function ProtectedRoute(props) {
  const a = 1;

  if (a) {
    return <> {props.children}</>;
  } else {
    return <Redirect to="/" />;
  }
}

export default ProtectedRoute;
