import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router";

export const WithAuthProtection = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const { isAuthenticaded } = useAuth();

    if (!isAuthenticaded) {
      return <Navigate to={"/login"} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};
