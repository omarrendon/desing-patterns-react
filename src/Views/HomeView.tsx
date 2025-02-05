import React from "react";
import "../App.css";
import { ControlProps, DataGrid } from "../components";

export const HomeView: React.FC = () => {
  return (
    <>
      <header>
        <h1>Patrones de renderizado y composición en React</h1>
      </header>
      <section>
        {/* <DataGrid /> */}
        <ControlProps />
      </section>
      <footer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quos
        blanditiis aspernatur similique nisi possimus delectus! Consequatur
        aliquid natus dolorum a earum libero ipsam assumenda molestias voluptas
        aut. Magni, molestias?
      </footer>
    </>
  );
};
