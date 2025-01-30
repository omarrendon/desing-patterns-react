import React from "react";
import { useNavigate } from "react-router";

export const PageProtected: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Fleicidades! Accediste a la ruta protegida.</h1>
      <div>
        <button onClick={() => navigate("/")}>Cerrar sesión</button>
      </div>
    </div>
  );
};
