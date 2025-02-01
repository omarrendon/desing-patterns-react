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
