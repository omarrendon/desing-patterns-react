import React from "react";
import { useFetch } from "./useFetch";

interface IUser {
  name: string;
  id: number;
  email: string;
}

export const CustomHook: React.FC = () => {
  const { data, error, isLoading, refetch } = useFetch<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) return <p>🔄 Cargando usuarios...</p>;
  if (error) return <p>❌ Error: {error}</p>;

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
