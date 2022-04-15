import React from "react";
import "../../styles/Cards.css";
import styled from "styled-components";
import { Text } from "../core";

const Container = styled.div`
  @media screen and (max-device-width: 600px) {
    gap: "20px";
    flex-direction: column;
  }
  @media not screen and (max-device-width: 600px) {
    gap: "4vw";
    flex-direction: "row";
  }
  width: ${(props) => (props.width ? props.width : "85vw")};
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  margin: 0 7.5vw 0 7.5vw;
`;
const Text_Column = styled.div`
  @media screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "80vw")};
  }
  @media not screen and (max-device-width: 600px) {
    max-width: ${(props) => (props.width ? props.width : "35vw")};
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Line = styled.div`
  @media not screen and (max-device-width: 600px) {
    width: 20vw;
    height: 1px;
    background-color: black;
  }
`;
const Image = styled.img`
  @media screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "85vw")};
    height: ${(props) => (props.height ? props.height : "60vw")};
  }

  @media not screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "40vw")};
    height: ${(props) => (props.height ? props.height : "25vw")};
    ${(props) => (props.width ? '' : "min-width: 290px")};
    ${(props) => (props.height ? '' : "min-height: 180px")};
  }
  border-radius: 8px;
`;
export const Card = ({
  line,
  image,
  first,
  header,
  text,
  imgwidth,
  imgheight,
  width,
}) => {
  if (typeof image === "object") image = JSON.stringify(image);
  console.log(image);
  return (
    <Container width={width}>
      {first === "image" && (
        <Image width={imgwidth} height={imgheight} src={image}></Image>
      )}
      <div>
        <Text_Column>
          <Text type={"heading3"} style={{ margin: "5px 0 10px 0" }}>
            {header}
          </Text>
          <Text type="title2" style={{ margin: "5px 0 10px 0" }}>
            {text}
          </Text>
        </Text_Column>
        <div>{line === true && <Line />}</div>
      </div>
      {first != "image" && (
        <Image
          width={imgwidth}
          height={imgheight}
          src={image}
        ></Image>
      )}
    </Container>
  );
};

export default Card;
