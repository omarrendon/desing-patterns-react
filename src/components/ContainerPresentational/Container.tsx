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
