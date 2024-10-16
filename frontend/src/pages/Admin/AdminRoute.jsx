import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="login" replace />
  );
  return <div>AdminRoute</div>;
};

export default AdminRoute;
