import React from "react";
import { Redirect, Route } from "react-router-dom";
import CreatePost from "../pages/CreatePost";

function ProtectedRoute({ component: Component, authStatus, setAuthStatus }) {
  if (authStatus) {
    return (
      <>
        <Route path="/timeline">
          <Component authStatus={authStatus} setAuthStatus={setAuthStatus} />
        </Route>
        <Route path="/createpost">
          <CreatePost />
        </Route>
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default ProtectedRoute;
