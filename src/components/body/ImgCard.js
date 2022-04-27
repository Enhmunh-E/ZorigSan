import React from "react";
import "../../styles/Cards.css";
import styled from "styled-components";
import GetWindowSize from "../../util/GetWindowSize";

const Container = styled.div`
  @media screen and (max-device-width: 600px) {
    gap: "20px";
    flex-direction: column;
  }
  @media not screen and (max-device-width: 600px) {
    justify-content: space-between;
    gap: "4vw";
  }
  width: ${(props) => (props.width ? props.width : "85vw")};
  display: flex;
  height: fit-content;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "0 10vw 0 10vw")};
`;
const Text_Column = styled.div`
  @media screen and (max-device-width: 600px) {
    width: "85vw";
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
const Image = styled.div`
  @media screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "85vw")};
    height: ${(props) => (props.height ? props.height : "60vw")};
    border-radius: 4px;
  }

  @media not screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "40vw")};
    height: ${(props) => (props.height ? props.height : "25vw")};
    ${(props) => props.minwidth && "min-width: 290px"};
    ${(props) => props.minheight && "min-height: 180px"};
    border-radius: 8px;
  }
  position: relative;
  background: url(${(props) => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
`;

const Text = styled.h1`
  font-style: normal;
  margin: 0;
  margin: 24px 0 0 0;

  @media screen and (max-device-width: 1000px) {
    font-size: ${(props) => (props.type === "heading" ? "14px" : "12px")};
    line-height: ${(props) => (props.type === "heading" ? "18px" : "20px")};
  }
  @media not screen and (max-device-width: 1000px) {
    font-size: ${(props) => (props.type === "heading" ? "18px" : "16px")};
    line-height: ${(props) => (props.type === "heading" ? "22px" : "32px")};
  }
  @media screen and (max-device-width: 600px) {
    display: flex;
    justify-content: left;
    font-size: 14px;
    line-height: 24px;
  }
  @media screen and (max-device-width: 400px) {
    font-size: 11px;
    line-height: 18px;
  }
  text-align: left;
  font-weight: ${(props) => (props.type === "heading" ? "700" : "400")};
  ${(props) => (props.type === "heading" ? "" : "margin: 10px 0 10px 0")};
  font-family: "Montserrat";
  color: ${(props) => (props.color ? props.color : "#0C265C")};
  @media screen and (max-device-width: 600px) {
    color: "0C265C";
  }
`;

const Text_Container = ({ color, header, line, text }) => {
  return (
    <Text_Column>
      <Text color={color} type="heading">
        {header}
      </Text>
      <Text color={color} type="title">
        {text}
      </Text>
      <div>{line === true && <Line />}</div>
    </Text_Column>
  );
};
// eslint-disable-next-line complexity
export const Card = ({
  color,
  date,
  line,
  image,
  first,
  header,
  text,
  imgwidth,
  imgheight,
  margin,
}) => {
  const { window_width } = GetWindowSize();
  let direction;
  let width;
  let height;
  let minwidth;
  let minheight;
  if (typeof image === "object") image = JSON.stringify(image);

  return (
    <Container
      margin={margin}
      direction={direction}
      height={height}
      width={width}
    >
      {first === "image" && (
        <Image
          window_width={window_width}
          width={imgwidth}
          height={imgheight}
          image={image}
          minheight={minheight}
          minwidth={minwidth}
        />
      )}
      {window_width > 600 && (
        <Text_Container
          color={color}
          date={date}
          header={header}
          line={line}
          text={text}
        />
      )}
      {first != "image" && (
        <Image
          width={imgwidth}
          height={imgheight}
          image={image}
          minheight={minheight}
          minwidth={minwidth}
        ></Image>
      )}
    </Container>
  );
};

export default Card;
