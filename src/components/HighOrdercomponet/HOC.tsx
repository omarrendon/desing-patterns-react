import React from "react";
import { useAuth } from "./useAuth";
import { AuthProvider } from "./AuthProvider";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import HOCProtected from "./HOCProtected";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

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

export const HOC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/hoc" element={<HOCProtected />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
