import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ LoggedIn }) {
  return LoggedIn ? <Outlet /> : <Navigate to="/signup" />;
}

export default PrivateRoute;
