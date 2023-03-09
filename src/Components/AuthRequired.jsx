import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function AuthRequired() {
  const auth = { token: '123' };
  // const auth = { token: null };

  const location = useLocation(); // {pathname: '/host', search: '', hash: '', state: null, key: 'cphfzcj0'}

  if (!auth.token) {
    return <Navigate
      to="/login"
      state={{ message: "You should login first:", from: location.pathname }}
      replace />
  }
  return <Outlet />
}