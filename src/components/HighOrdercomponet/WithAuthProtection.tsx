import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router";

// Función que funge como HOC que nos ayudará
// A proteger las páginas protegidas.
export const WithAuthProtection = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    // Seleccionamos nuestro estado isAuthenticaded
    //  De nuestro contexto global
    const { isAuthenticaded } = useAuth();

    // Si no está autenticado nos redirige al login page
    if (!isAuthenticaded) {
      return <Navigate to={"/login"} replace />;
    }
    // Si se encuentra autenticado nos lleva a la página
    // protegida que le indiquemos
    return <WrappedComponent {...props} />;
  };
};
