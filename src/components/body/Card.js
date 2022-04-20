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
  ${(props) => props.type && "flex-direction: column"};
  width: ${(props) => (props.width ? props.width : "85vw")};
  display: flex;
  height: fit-content;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "0 10vw 0 10vw")};
`;
const Text_Column = styled.div`
  @media screen and (max-device-width: 600px) {
    width: ${(props) => (props.width ? props.width : "85vw")};
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
    ${(props) => props.minwidth && "min-width: 290px"};
    ${(props) => props.minheight && "min-height: 180px"};
  }
  border-radius: ${(props) =>
    props.borderradius ? props.borderradius : "8px"};
`;
const Text = styled.h1`
  font-style: normal;
  @media screen and (max-device-width: 800px) {
    font-size: ${(props) => (props.type === "heading" ? "14px" : "12px")};
  }
  @media not screen and (max-device-width: 800px) {
    font-size: ${(props) => (props.type === "heading" ? "18px" : "16px")};
  }
  font-weight: ${(props) => (props.type === "heading" ? "700" : "400")};
  text-align: left;
  @media screen and (max-device-width: 600px) {
    display: flex;
    justify-content: left;
  }
  line-height: 22px;
  font-family: 'Montserrat';
  color: ${(props) => (props.color ? props.color : "#0C265C")};
`;

export const Card = ({
  color,
  font,
  line,
  image,
  first,
  header,
  text,
  imgwidth,
  imgheight,
  type,
  margin,
}) => {
  let borderradius;
  let direction;
  let width;
  let height;
  let minwidth;
  let minheight;
  let fontsize;
  if (typeof image === "object") image = JSON.stringify(image);
  if (type === "small") {
    const { window_width } = GetWindowSize();
    direction = "column";
    first = "image";
    borderradius = "0";
    margin = "0";
    if (window_width < 600) {
      width = "90vw";
      imgwidth = "85vw";
      imgheight = "65vw";
    } else {
      width = "22.5vw";
      imgwidth = "22.5vw";
      imgheight = "16.5vw";
    }
  }
  // I HAVE NOT DONE THE MOBILE VERSION SXDFGHJKLKJHGFDFGHJYTGFVGBHJUYTGFCDVBNHJUYTRFDCVBHYTRFDCXVHU
  return (
    <Container
      margin={margin}
      direction={direction}
      height={height}
      type={type}
      width={width}
    >
      {first === "image" && (
        <Image
          borderradius={borderradius}
          width={imgwidth}
          height={imgheight}
          src={image}
          minheight={minheight}
          minwidth={minwidth}
        ></Image>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Text_Column>
          <Text
            fontsize={fontsize}
            font={font}
            color={color}
            type="heading"
            style={{ margin: "5px 0 10px 0" }}
          >
            {header}
          </Text>
          <Text
            font={font}
            fontsize={fontsize}
            color={color}
            type="title"
            style={{ margin: "5px 0 10px 0" }}
          >
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
          minheight={minheight}
          minwidth={minwidth}
        ></Image>
      )}
    </Container>
  );
};

export default Card;
