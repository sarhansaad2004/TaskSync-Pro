import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const{ user , loading } = useAuth();
  const location = useLocation();

  if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      )
  }

  if (user) {
      return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;
