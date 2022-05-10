/* eslint-disable */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../functions/useWindowDimensions";
/* eslint-disable complexity */
const Cart = styled.div`
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}`};
  width: ${(props) => props.width && `${props.width}`};
  height: 100%;
  display: flex;
  border-radius: 10px;
  @media (max-width: 1100px) {
    width: 47%;
  }
  @media (max-width: 600px) {
    width: 327px;
    height: 242px;
    padding: 0px;
  }
  @media (max-width: 386px) {
    width: 90%;
  }
`;
const Text = styled.div`
  width: 70%;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #ffffff;
  padding-bottom: 24px;
  padding-left: 16px;
  transition: all 1s;
  font-size: 18px;
  @media (max-width: 1099px) {
    text-align: left;
    font-size: 18px;
  }
  @media (max-width: 860px) {
    word-break: break-all;
  }
  @media (max-width: 700px) {
    text-align: left;
    word-break: normal;
  }
  @media (max-width: 600px) {
    word-break: normal;
    text-align: left;
  }
  @media (max-width: 288px) {
    word-break: break-all;
  }
`;
const Img = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(12, 38, 92, 0.5),
      rgba(12, 38, 92, 0.5)
    ),
    url(${(props) => props.img && `${props.img}`});
  background-position: center;
  width: 100%;
  max-height: 90%;
  min-height: 70%;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  object-fit: cover;
  background-size: cover;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 327px;
    height: 242px;
  }
`;
const Button = styled.button`
  border: none;
  transition: all 0.5s ease;
  border-radius: 4px;
  height: 40px;
  background: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  padding-left: ${(props) => props.paddingLeft && `${props.paddingLeft}`};
`;
const Sum = styled.div`
  width: 64%;
  @media (max-width: 1065px) {
    width: 50%;
  }
  @media (max-width: 909px) {
    width: 40%;
  }
  @media (max-width: 700px) {
    width: 54%;
  }
  @media (max-width: 600px) {
    width: 64%;
  }
`;
const Con = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  padding-bottom: ${(props) => props.paddingBottom && `${props.paddingBottom}`};
  align-items: center;
`;
export const EventCart = ({ img, title, paddingTop }) => {
  const divRef = useRef(null);
  const { width } = useWindowDimensions();
  const [textHeight, setTextHeight] = useState(divRef?.current?.offsetHeight);
  const [isHovering1, setIsHovering1] = useState(false);
  const [DisWidth, setwidth] = useState(false);
  useEffect(() => {
    if (width <= "700") {
      setwidth(true);
    } else {
      setwidth(false);
    }
    // console.log(DisWidth)
    setTextHeight(divRef?.current?.offsetHeight);
  }, [width]);

  return (
    <Cart paddingTop={paddingTop} width="48.6%">
      <Img
        img={img}
        onMouseOver={() => {
          setIsHovering1(true);
        }}
        onMouseOut={() => {
          setIsHovering1(false);
        }}
      >
        <div style={{ width: "100%" }}>
          <Text
            style={{
              bottom:
                DisWidth == true
                  ? "none"
                  : !isHovering1
                  ? "10px"
                  : 10 + textHeight + "px",
              position: DisWidth == true ? "" : "absolute",
            }}
          >
            {title}
          </Text>
          {DisWidth == true ? (
            <Con paddingBottom="12px">
              <Button paddingLeft="16px">Дэлгэрэнгүй</Button>
              <Sum>
                <div
                  style={{
                    height: "1.5px",
                    backgroundColor: "#fff",
                    transition: "all 0.5s",
                    width: "50px",
                  }}
                ></div>
              </Sum>
            </Con>
          ) : (
            <div>
              <Con
                ref={divRef}
                style={{
                  bottom: isHovering1 ? "10px" : "-" + textHeight + "px",
                  opacity: !isHovering1 ? 0 : 1,
                  position: "absolute",
                  transition: "all 0.5s",
                }}
              >
                <Button>Дэлгэрэнгүй</Button>
                <Sum>
                  <div
                    style={{
                      height: "1.5px",
                      backgroundColor: "#fff",
                      transition: "all 0.5s",
                      width: "40%",
                      width: !isHovering1 ? "0%" : 30 + textHeight + "%",
                      opacity: !isHovering1 ? 0 : 1,
                    }}
                  ></div>
                </Sum>
              </Con>
            </div>
          )}
        </div>
      </Img>
    </Cart>
  );
};
