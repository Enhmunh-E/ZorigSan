import React from "react";
import "../../styles/Cards.css";
import { Image } from "../core";
const Card = ({ line, image, first, header, text }) => {
  return (
    <div
      className="container"
    >
      {first === "image" && (
        <Image className="image" src={image}></Image>
      )}
      <div>
        <div className="text_collumn">
          <h1 className="header">{header}</h1>
          <h2 className="text">{text}</h2>
        </div>
        <div>{line === true && <div className="line"></div>}</div>
      </div>
      {first != "image" && (
        <Image
          className="image"
          src={image}
        ></Image>
      )}
    </div>
  );
};

export default Card;
