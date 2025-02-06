import React from "react";
import ControlPropsImage from "../../assets/control-props.png";
import RenderPropsImage from "../../assets/render-props.png";
import HOCImage from "../../assets/hoc.png";
import HookImage from "../../assets/customHook.png";
import { Card } from "../Card/Card";

interface ISection {
  title: string;
  description: string;
  URLImage: string;
  altText?: string;
}

const sections: ISection[] = [
  {
    title: "Control Props",
    description: "  Conbtrol props ejemplo",
    URLImage: ControlPropsImage,
    altText: "Control Props ejemplo",
  },
  {
    title: "Render Props",
    description: "  Render props ejemplo",
    URLImage: RenderPropsImage,
    altText: "Render Props ejemplo",
  },
  {
    title: "High Order Component",
    description: "HOC ejemplo",
    URLImage: HOCImage,
    altText: "HOC ejemplo",
  },
  {
    title: "Custom Hook",
    description: "Hook ejemplo",
    URLImage: HookImage,
    altText: "HOC ejemplo",
  },
  {
    title: "Container Presentational",
    description: "container ejemplo",
    URLImage: HookImage,
    altText: "HOC ejemplo",
  },
];

export const DataGrid: React.FC = () => {
  return (
    <>
      {sections.map(({ title, URLImage, description, altText }) => (
        <Card
          key={title}
          title={title}
          description={description}
          image={URLImage}
          altText={altText}
        />
      ))}
    </>
  );
};
