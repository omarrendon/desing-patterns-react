import React from "react";
import "../App.css";
import { DataGrid } from "../components";

export const HomeView: React.FC = () => {
  return (
    <>
      <header>
        <h1>Patrones de renderizado y composición en React ⚛️</h1>
      </header>
      <section className="Patterns">
        <DataGrid />
      </section>
      <footer>
        <p>
          Proyecto creado con la finalidad de aprender a implementar los
          distintos patrones de diseño que se puede usar en componentes.
        </p>
        <span>⚛️👨‍💻</span>
      </footer>
    </>
  );
};
