import React from "react";
import { useNavigate } from "react-router";

// Página protegida que solo se accede si se cumple cierta condición
export const PageProtected: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Felicidades! Accediste a la ruta protegida.</h1>
      <div>
        {/* Botón que simula cierre de sesión y redireciona al home */}
        <button onClick={() => navigate("/")}>Cerrar sesión</button>
      </div>
    </div>
  );
};
