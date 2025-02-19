import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../useAuth";

// Página que simula el inicio de sesión
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Función que simula el inicio de sesión y redirige
  // A la página protegida
  const handleSession = () => {
    login();
    navigate("/hoc-protected");
  };

  return (
    <div>
      <h2>Página de inicion de sesión</h2>
      <button onClick={handleSession}>Iniciar sesión</button>
    </div>
  );
};
