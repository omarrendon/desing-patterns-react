import React from "react";
import ControlPropsImage from "../../assets/control-props.png";
import RenderPropsImage from "../../assets/render-props.png";
import HOCImage from "../../assets/hoc.png";
import HookImage from "../../assets/customHook.png";
import CCImage from "../../assets/compound-componet.png";
import { Card } from "../Card/Card";

interface ISection {
  title: string;
  description: string;
  URLImage: string;
  altText?: string;
  route: string;
}

const sections: ISection[] = [
  {
    title: "Control Props",
    description:
      "Permite que un componente pueda ser controlado tanto internamente como externamente.",
    URLImage: ControlPropsImage,
    altText: "Control Props ejemplo",
    route: "/control-props",
  },
  {
    title: "Render Props",
    description:
      "Permite compartir lógica entre componentes mediante una función que se pasa como prop.",
    URLImage: RenderPropsImage,
    altText: "Render Props ejemplo",
    route: "/render-props",
  },
  {
    title: "High Order Component",
    description:
      "Es una función que recibe un componente y devuelve un nuevo componente mejorado",
    URLImage: HOCImage,
    altText: "HOC ejemplo",
    route: "/hoc",
  },
  {
    title: "Custom Hook",
    description:
      "Es una función que utiliza los hooks de React para encapsular lógica reutilizable.",
    URLImage: HookImage,
    altText: "HOC ejemplo",
    route: "/custom-hook",
  },
  {
    title: "Container Presentational",
    description:
      "Es una estrategia en React para separar la lógica de negocio de la presentación de UI.",
    URLImage: HookImage,
    altText: "cont6aioner ejemplo",
    route: "/container-presentational",
  },
  {
    title: "Compound Component",
    description:
      "Permite que varios componentes trabajen juntos como una unidad cohesiva.",
    URLImage: CCImage,
    altText: "CC ejemplo",
    route: "/compound-component",
  },
];

export const DataGrid: React.FC = () => {
  return (
    <>
      {sections.map(({ title, URLImage, description, altText, route }) => (
        <Card
          key={title}
          title={title}
          description={description}
          image={URLImage}
          altText={altText}
          route={route}
        />
      ))}
    </>
  );
};
