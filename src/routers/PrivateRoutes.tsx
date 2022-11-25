import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  isAuthenticated: Object;
}

const PrivateRoutes: FC<Props> = ({ isAuthenticated, children }) => {
  return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
};

export default PrivateRoutes;
