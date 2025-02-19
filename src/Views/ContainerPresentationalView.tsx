import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as syntaxHighlighterTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GoBack, Container } from "../components";
import "./pages-styles.css";

const componentToShow = `
// Presenter.tsx

import React from "react";
import { IUser } from "../CustomHook/CustomHook";

interface IPropsPresenter {
  isLoading: boolean;
  error: string | null;
  users: IUser[] | null;
  refetch: () => void;
}

export const Presenter: React.FC<IPropsPresenter> = ({
  error,
  isLoading,
  refetch,
  users,
}) => {
  if (isLoading) return <p>🔄 Cargando usuarios...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <>
      <h2>Lista de usuarios</h2>
      <button onClick={refetch}>🔄 Recargar</button>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            Usuario: {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};


// Container.tsx

import React from "react";
import { Presenter } from "./Presenter";
import { IUser } from "../CustomHook/CustomHook";
import { useFetch } from "../CustomHook/useFetch";

export const Container: React.FC = () => {
  const { data, error, isLoading, refetch } = useFetch<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <Presenter
        error={error}
        isLoading={isLoading}
        refetch={refetch}
        users={data}
      />
    </>
  );
};

`;

export const ContainerPresentationalView = () => {
  return (
    <div className="container">
      <GoBack route="/" />
      <h1> Container/Presentation</h1>
      <div className="content-container">
        <p>
          El patrón Container/Presentation es una estrategia en React para
          separar la lógica de negocio de la presentación de UI, lo que hace que
          los componentes sean más reutilizables, fáciles de probar y mantener.
        </p>
        <div>
          <h2>✅ Conceptos</h2>
          <p>División de responsabilidades</p>
          <p>1️⃣ Componentes de Presentación (Presentational Components)</p>
          <ul>
            <li>Solo se encargan de la UI.</li>
            <li>No manejan estado ni lógica de negocios</li>
            <li>Recibe datos y callbacks como props</li>
          </ul>
          <p>2️⃣ Componentes Contenedores (Container Components)</p>
          <ul>
            <li>Manejan lógica de negocios, estado y efectos secundarios</li>
            <li>
              Se comunican con APIs o almacenes de datos (Redux, Context API)
            </li>
            <li>Pasan datos y funciones a los componentes de presentación</li>
          </ul>
        </div>
        <div>
          <h2> 🔹 Beneficios del Patrón Container/Presentation</h2>
          <ul>
            <li>
              ✅ Separa responsabilidades → La lógica de negocio no está
              mezclada con la UI.
            </li>
            <li>
              ✅ Fácil de testear → La UI y la lógica pueden probarse por
              separado.
            </li>
            <li>
              ✅ Mantenibilidad → Si cambias cómo obtienes los datos, solo
              editas el contenedor.
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
        <Container />
      </div>
      <div className="footer-container">
        <GoBack route="/" />
      </div>
    </div>
  );
};
