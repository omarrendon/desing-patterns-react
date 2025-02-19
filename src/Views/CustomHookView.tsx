import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as syntaxHighlighterTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./pages-styles.css";
import { CustomHook, GoBack } from "../components";

const componentToShow = `
  // useFetch.tsx

  import { useCallback, useEffect, useMemo, useState } from "react";
  
  // Interfaz que define el comportamiento de nuestro custom hook
  interface IUseFetchProps<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
  }
  
  export function useFetch<T>(url: string): IUseFetchProps<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>("");
  
    // Función que realiza la petición y setea los estados a devolver
    const fetchData = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error');
        }
        const dataResponse = await response.json();
        setData(dataResponse);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
      setIsLoading(false);
    }, [url]);
  
    // Memoizamos la data;
    const memoizedData = useMemo(() => data, [data]);
  
    // Cada que se monta elc custom hook lanza la petición
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    return {
      data: memoizedData,
      error,
      isLoading,
      refetch: fetchData,
    };
  }
  
  // CustomHook.tsx

  import React from "react";
  import { useFetch } from "./useFetch";
  
  // Interfaz que definimos para tipar los datos de la petición
  export interface IUser {
    name: string;
    id: number;
    email: string;
  }
  
  export const CustomHook: React.FC = () => {
    // Variables que extraemos del custom hook useFetch
    const { data, error, isLoading, refetch } = useFetch<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  
    // Si el estado de isLoading es trueu nos muestra el siguiente elemento
    if (isLoading) return <p>🔄 Cargando usuarios...</p>;
    // En caso de tener un error mostramos el siguiente elemento
    if (error) return <p>❌ Error: {error}</p>;
  
    // Mapeo de la información que nos devuelve el custom hook
    return (
      <>
        <h2>Lista de usuarios</h2>
        <button onClick={refetch}>🔄 Recargar</button>
        <ul>
          {data?.map(user => (
            <li key={user.id}>
              Usuario: {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </>
    );
  };
  
`;

export const CustomHookView = () => {
  return (
    <div className="container">
      <GoBack route="/" />
      <h1>Custom Hook</h1>
      <div className="content-container">
        <p>
          Un Custom Hook en React es una función reutilizable en
          JavaScript/TypeScript que usa los hooks de React (useState, useEffect,
          useContext, etc.) para encapsular lógica y evitar la repetición de
          código en los componentes.
        </p>
        <div>
          <h2>✅ Conceptos</h2>
          <p>
            Los Custom Hooks hacen que el código sea más modular, reutilizable y
            fácil de mantener. Son esenciales en aplicaciones React grandes para
            manejar lógica repetitiva de manera eficiente.
          </p>
        </div>
        <div>
          <h2>✅ Ventajas de los custom hooks</h2>
          <ul>
            <li>
              ✅ Reutilización de lógica: Separa la lógica de los componentes.
            </li>
            <li>
              ✅ Código más limpio: Reduce la complejidad dentro de los
              componentes.
            </li>
            <li>
              ✅ Fácil de probar y mantener: Puedes probar la lógica sin
              renderizar un componente.
            </li>
            <li>
              ✅ Menos repetición de código: Evita copiar y pegar lógica en
              múltiples componentes.
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
        <CustomHook />
      </div>
      <div className="footer-container">
        <GoBack route="/" />
      </div>
    </div>
  );
};
