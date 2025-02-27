import React from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";

// Página que simula el inicio de sesión
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Función que simula el inicio de sesión y redirige
  // A la página protegida
  const handleSession = () => {
    login();
    navigate("/hoc");
  };

  return (
    <div>
      <h2>Página de inicion de sesión</h2>
      <button onClick={handleSession}>Iniciar sesión</button>
    </div>
  );
};

// Página que nos dirige al Login
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Página de Inicio</h2>
      <div>
        <button onClick={() => navigate("/login")}>Iniciar sesión</button>
      </div>
    </>
  );
};

// Componente principal que nos provee las rutas
export const HOC = () => {
  return <HomePage />;
};
