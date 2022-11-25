import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  isAuthenticated: Object;
}

const PublicRoutes: FC<Props> = ({ isAuthenticated, children }) => {
  return <>{!isAuthenticated ? children : <Navigate to="/" />}</>;
};

export default PublicRoutes;
