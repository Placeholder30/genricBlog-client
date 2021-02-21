import { React } from "react";
import { Redirect } from "react-router-dom";

function ProtectedRoute({
  component: Component,
  authStatus,
  setAuthStatus,
  authToken,
}) {
  if (authStatus) {
    return (
      <Component
        authStatus={authStatus}
        setAuthStatus={setAuthStatus}
        authToken={authToken}
      />
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default ProtectedRoute;
