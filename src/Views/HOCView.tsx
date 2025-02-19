import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as syntaxHighlighterTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GoBack, HOC } from "../components";
import "./pages-styles.css";

const componentToShow = `
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

// AuthProvider
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

// WithAuthProtection
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

// HOCProtected
import { PageProtected } from "./PageProtected";
import { WithAuthProtection } from "./WithAuthProtection";

// Definimos una variable la cual hará referencia
// A la página que deseamos proteger usando nuestro HOC.
const HOCProtected = WithAuthProtection(PageProtected);

export default HOCProtected;

// PageProtected
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

`;
export const HOCView = () => {
  return (
    <div className="container">
      <GoBack route="/" />
      <h1>Higher Order Component</h1>
      <div className="content-container">
        <p>
          Un Higher-Order Component (HOC) es una función que recibe un
          componente y devuelve un nuevo componente mejorado. Sirve para
          reutilizar lógica, como autenticación, permisos, manejo de datos, etc.
        </p>
        <div>
          <h2>✅ Conceptos</h2>
          <p>
            Un HOC es una función que toma un componente como entrada y devuelve
            un nuevo componente con funcionalidades adicionales.
          </p>
        </div>
        <div>
          <h2>✅ Ventajas de los HOCs</h2>
          <ul>
            <li>
              ✅ Reutilización de lógica: No necesitas modificar Menu, solo
              aplicas el HOC.
            </li>
            <li>
              ✅ Código más limpio: Separas la lógica adicional sin ensuciar los
              componentes base.
            </li>
            <li>
              ✅ Escalabilidad: Lo Puedes aplicar a diferentes componentes sin
              duplicar código.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2> ✅ Código de ejemplo</h2>
        <SyntaxHighlighter
          language="jsx"
          showLineNumbers
          style={syntaxHighlighterTheme}
        >
          {componentToShow}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Componente de ejemplo ⚛️</h2>
        <HOC />
      </div>
      <div className="footer-container">
        <GoBack route="/" />
      </div>
    </div>
  );
};
