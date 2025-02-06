import { createContext, useState } from "react";

// Interfaz que nos indicará variables y métodos contendra nuestro estado
interface IAuthContextProps {
  isAuthenticaded: boolean;
  login: () => void;
  logout: () => void;
}

// Creación de contexto
export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticaded, setIsAuthenticaded] = useState(false);

  const login = () => setIsAuthenticaded(true);
  const logout = () => setIsAuthenticaded(false);

  return (
    <AuthContext.Provider value={{ isAuthenticaded, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
