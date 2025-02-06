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
