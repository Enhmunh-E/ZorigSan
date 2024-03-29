import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { CarouselBack, CarouselNext } from "../../assets/icons";
import useWindowDimensions from "../../functions/useWindowDimensions";
import { Stack, Text } from "../core";

/* eslint-disable complexity */

const MainImage = styled.img`
  position: absolute;
  bottom: ${(props) => `${props.bottom - props.height / 2}px`};
  left: ${(props) => `${props.left - props.width / 2}px`};
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  transition: all 1000ms;
  border-radius: 50%;
  ${(props) =>
    props.display === "none" ? `display: none` : "cursor: pointer"};
  ${(props) =>
    props.angle === 90
      ? `  box-shadow: ${props.width * 0.015}px 10px ${
          props.width * 0.1
        }px #888888`
      : ""};
`;
const MainInfo = styled.div`
  position: absolute;
  bottom: ${(props) => `${props.bottom}px`};
  left: ${(props) => `${props.left}px`};
  height: ${(props) => `${props.size * 0.23}px`};
  width: ${(props) => `${props.size * 0.46}px`};
  transition: all 500ms;
  ${(props) => (props.display === "none" ? `display: none` : "")};
`;
const CarouselBtn = styled.div`
  position: absolute;
  bottom: ${(props) => `${props.bottom}px`};
  left: ${(props) => `${props.left}px`};
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  border-radius: 50%;
  transition: all 1000ms;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  :hover {
    transition: none;
    ${(props) =>
      ` box-shadow: ${props.width * 0.05}px ${props.width * 0.05}px  ${
        props.width * 0.3
      }px #888888`};
  }
`;
const MobileCardImg = styled.img`
  height: ${(props) => `${props.height}`};
  width: ${(props) => `${props.width}`};
  border: 1px solid #0c265c10;
  border-radius: 2% 2% 0 0;
`;
const MobileCardInfo = styled.div`
  height: ${(props) => `${props.height}`};
  width: ${(props) => `${props.width}`};
  border-radius: 0 0 2% 2%;
  border: 1px solid #0c265c26;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CircleCarousel = ({ arr, topTittle }) => {
  const { width } = useWindowDimensions();
  const [go, setGo] = useState(0);
  let top;
  const [move, setMove] = useState(false);
  const radius = width * 0.38;
  // const [elements, setElements] = useState(arr.length >= 8 ? [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]] : arr)
  const elements = useMemo(() => {
    return arr?.slice(0, 8);
  }, [arr]);
  const [ind, setInd] = useState(0);
  const [next, setNext] = useState(8);
  const Prev = () => {
    if (top !== 0) {
      if (!move) {
        if (go === 3) {
          setGo(-4);
        } else {
          setGo(go + 1);
        }
        if (ind === 0) {
          setInd(elements.length - 1);
        } else {
          setInd(ind - 1);
        }
        if (arr.length > 8) {
          let a = (ind + 3) % 8;
          elements[a] = arr[next];
          if (next === arr.length - 1) {
            setNext(0);
          } else {
            setNext(next + 1);
          }
        }
        setMove(true);
        const timer = setTimeout(() => {
          setMove(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  };
  const Next = () => {
    if (top !== elements.length - 1) {
      if (!move) {
        if (go === -4) {
          setGo(3);
        } else {
          setGo(go - 1);
        }
        if (ind === elements.length - 1) {
          setInd(0);
        } else {
          setInd(ind + 1);
        }
        if (arr.length > 8) {
          let a = (ind + 5) % 8;
          elements[a] = arr[next];
          if (next === arr.length - 1) {
            setNext(0);
          } else {
            setNext(next + 1);
          }
        }
        setMove(true);
        const timer = setTimeout(() => {
          setMove(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  };
  if (arr) {
    return (
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        style={{ width: "100vw" }}
      >
        <Text
          style={{
            color: "#0C265B",
            marginBottom: width * 0.05 + "px",
            marginTop: "10%",
            textAlign: "center",
          }}
          type="T0"
        >
          {" "}
          {topTittle}
        </Text>

        {width > 540 ? (
          <div
            style={{
              backgroundColor: "white",
              height: width * 0.5 + "px",
              position: "relative",
              width: width + "px",
            }}
          >
            {elements?.map((element, index) => {
              const bottom =
                (Math.sin((Math.PI / 4) * (index + 2 + go)) * radius) / 2 +
                radius / 2;
              const left =
                Math.cos((Math.PI / 4) * (index + 2 + go)) * radius +
                radius * 1.3;

              const angle = Math.abs(((180 / 4) * (index + 2 + go)) % 180);
              // console.log('bottom',Math.round(bottom),'left', Math.round(left),'ind', index, 'angle', angle, );
              // console.log('go', go, 'pi', (index + 2 + go), 'index', index, 'bottom', bottom);
              let w = 0,
                h = 0;
              let display;
              if (angle === 0) {
                w = width * 0.075;
                h = width * 0.075;
              }
              if (angle === 45 || angle === 135) {
                w = (width / 68) * 7;
                h = (width / 68) * 7;
                if (
                  bottom ===
                    (Math.sin((Math.PI / 4) * 5) * radius) / 2 + radius / 2 ||
                  bottom ===
                    (Math.sin((Math.PI / 4) * 7) * radius) / 2 + radius / 2
                ) {
                  display = "none";
                }
              }
              if (angle === 90) {
                w = (width / 24) * 5;
                h = (width / 24) * 5;
                if (Math.round(bottom) === 0) {
                  display = "none";
                }
              }
              if (elements.length < 8) {
                if (angle === 90 && bottom !== 0) {
                  top = index;
                }
              }
              return (
                <div key={index}>
                  <MainImage
                    display={display}
                    width={w}
                    height={h}
                    bottom={bottom}
                    left={left}
                    angle={angle}
                    src={element.image.file.url}
                  ></MainImage>
                  <MainInfo
                    size={width}
                    left={radius / 1.45}
                    bottom={0}
                    style={
                      angle === 90 && bottom !== 0
                        ? {
                            display: "",
                            opacity: "1",
                            transition: "all 1s",
                            visibility: "visible",
                          }
                        : {
                            display: "none",
                            opacity: "0",
                            transition: "all 1s",
                            visibility: "hidden",
                          }
                    }
                  >
                    <Stack
                      style={{ height: "auto" }}
                      alignItems={"center"}
                      justifyContent={"center"}
                      flexDirection={"column"}
                    >
                      <Text
                        style={{
                          color: "#0C265B",
                          marginBottom: width * 0.01 + "px",
                        }}
                        type="H1"
                      >
                        {angle === 90 && bottom !== 0 ? element.name : ""}
                      </Text>
                      <Text
                        style={{
                          color: "#243C6C",
                          marginBottom: width * 0.01 + "px",
                          textAlign: "center",
                        }}
                        type="T2"
                      >
                        {angle === 90 && bottom !== 0 && element.word
                          ? element.word.word.slice(0, 400)
                          : ""}
                      </Text>
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "row",
                          height: width * 0.02 + "px",
                          justifyContent: "center",
                          width: width * 0.5 + "px",
                        }}
                      >
                        <Text
                          style={{
                            color: "#1C6DD0",
                            marginTop: "15%",
                            textAlign: "center",
                          }}
                          type="T2"
                        >
                          {angle === 90 && bottom !== 0
                            ? element?.program?.length > 0 &&
                              element?.program[0]?.name
                            : ""}
                        </Text>
                      </div>
                    </Stack>
                  </MainInfo>
                </div>
              );
            })}
            <CarouselBtn
              left={Math.cos(Math.PI / 2) * radius + radius / 1.25}
              bottom={Math.sin(Math.PI / 2) * radius}
              width={width * 0.03}
              disabled={top === elements?.length - 1 ? true : false}
              height={width * 0.03}
              onClick={Next}
            >
              <CarouselBack
                style={{
                  height: width * 0.025 + "px",
                  width: width * 0.025 + "px",
                }}
              />
            </CarouselBtn>
            <CarouselBtn
              left={Math.cos(Math.PI / 2) * radius + radius * 1.7}
              bottom={Math.sin(Math.PI / 2) * radius}
              width={width * 0.03}
              disabled={top === 0 ? true : false}
              height={width * 0.03}
              onClick={Prev}
            >
              <CarouselNext
                style={{
                  height: width * 0.025 + "px",
                  width: width * 0.025 + "px",
                }}
              />
            </CarouselBtn>
          </div>
        ) : (
          <div style={{ height: "150vw", overflowX: "scroll", width: "100vw" }}>
            <Stack
              style={{ marginLeft: "8vw", marginRight: "8vw" }}
              flexDirection={"row"}
            >
              {elements?.map((element, index) => {
                return (
                  <Stack
                    style={{ marginLeft: "5vw", marginRight: "5vw" }}
                    key={index}
                    flexDirection={"column"}
                  >
                    <MobileCardImg
                      width={"74vw"}
                      height={"74vw"}
                      src={element.image.file.url}
                    />
                    <MobileCardInfo
                      width={"66vw"}
                      height={"60vw"}
                      style={{
                        paddingBottom: "4vw",
                        paddingLeft: "4vw",
                        paddingRight: "4vw",
                      }}
                    >
                      <Text
                        style={{
                          color: "#0C265B",
                          marginBottom: width * 0.006 + "px",
                          textAlign: "center",
                        }}
                        type="H2"
                      >
                        {element.name}
                      </Text>
                      <Text
                        style={{
                          color: "#243C6C",
                          marginBottom: width * 0.01 + "px",
                          textAlign: "center",
                        }}
                        type="T3"
                      >
                        {element.word ? element.word.word.slice(0, 150) : ""}...
                      </Text>
                      <Text
                        style={{ color: "#1C6DD0", textAlign: "center" }}
                        type="T2Bold"
                      >
                        {element?.program?.length > 0 &&
                          element?.program[0]?.name}
                      </Text>
                    </MobileCardInfo>
                  </Stack>
                );
              })}
            </Stack>
          </div>
        )}
      </Stack>
    );
  } else {
    return <div></div>;
  }
};

export default CircleCarousel;
