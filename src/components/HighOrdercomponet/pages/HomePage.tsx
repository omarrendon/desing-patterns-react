import React from "react";
import { useNavigate } from "react-router";

// Página que nos dirige al Login
export const HomePage: React.FC = () => {
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
