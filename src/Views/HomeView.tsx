import React from "react";
import "../App.css";
import {
  CustomHook,
  DataGrid,
  HOC,
  RenderProps,
  Container,
  CompoundComponent,
} from "../components";

export const HomeView: React.FC = () => {
  return (
    <>
      <header>
        <h1>Patrones de renderizado y composición en React</h1>
      </header>
      <section>
        {/* <DataGrid /> */}
        <CompoundComponent />
        {/* <Container /> */}
        {/* <CustomHook /> */}
      </section>
      {/* <footer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quos
      </footer> */}
    </>
  );
};
