import React from "react";
import { Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  if (props.authStatus) {
    return <> {props.children}</>;
  } else {
    return <Redirect to="/" />;
  }
}

export default ProtectedRoute;
