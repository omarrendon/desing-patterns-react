import React from "react";
import "./Card.css";

interface ICardProps {
  title: string;
  description: string;
  image: string;
  altText?: string;
}

export const Card: React.FC<ICardProps> = ({
  image,
  altText,
  description,
  title,
}) => {
  return (
    <div className={"card-container"}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <img alt={altText} src={image} className="card-image" />
      <div className="card-footer">
        <button className="card-button">Leer mas...</button>
      </div>
    </div>
  );
};
