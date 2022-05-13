import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import { Stack } from "../../core";
import { ArrowInCircleIcon } from "../../../assets/icons/arrowincircleIcon";
import useWindowDimensions from "../../../functions/useWindowDimensions";

const NewsTitle = styled.h1`
  width: 100vw;
  display: flex;
  color: #0c265c;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  line-height: 49px;
  text-transform: uppercase;
  font-feature-settings: "case";
  font-size: 40px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;
const NewsContainer = styled.div`
  @media screen and (max-width: 600px) {
    width: 100vw;
    overflow-x: scroll;
  }
  @media not screen and (max-width: 600px) {
    width: 82vw;
    max-width: 1320px;
    overflow: hidden;
  }
`;
const NewsButton = styled.button`
  :disabled {
    opacity: 50%;
  }
  transition: all 0.3s;
  width: fit-content;
  height: fit-content;
  background: 0;
  border: 0;
  cursor: pointer;
  pointer-events: all;
  margin-bottom: 8vh;
  visibility: ${(props) => props.visibility};
  animation: name duration timing-function delay iteration-count direction
    fill-mode;
  ${(props) =>
    props.side === "right"
      ? "@media not screen and (max-width: 1200px) {transform: scale(1.5) rotate(180deg);} @media screen and (max-width: 1200px) {transform: rotate(180deg);}; margin-left: -5vw;"
      : "@media not screen and (max-width: 1200px) {transform: scale(1.5);};margin-right: -5vw"}
`;

export const NewsCarousel = ({ data, title }) => {
  const { width } = useWindowDimensions();
  const [innerdata, setInnerdata] = useState(data); // The array of data/
  const [direction, setDirection] = useState("middle"); // 'right' 'left' or 'middle'
  const [btnstate, setBtnstate] = useState({ left: true, right: true }); // true = on, false = off
  useEffect(() => {
    if (data.length <= 3) setBtnstate({ left: false, right: false });
    if (data.length === 4) {
      for (let i = 0; i < 4; i++) {
        data.push(data[i]);
        setInnerdata(data);
      }
    }
  }, []);

  const move = (dir) => {
    if (data.length === 4) {
      for (let i = 0; i < 4; i++) {
        data.push(data[i]);
        setInnerdata(data);
      }
    }
    setDirection(dir);
    setBtnstate({ left: false, right: false });
    setTimeout(() => {
      if (dir === "left") data.unshift(data.pop());
      // Move the Last object in the array into the First posioton;
      else data.push(data.shift()); // Move the First 3 objects in the array into the last 3 posiotons
      setInnerdata(data);
      setDirection("middle");
      setBtnstate({ left: true, right: true });
    }, 755);
  };
  return (
    <Stack flexDirection="column" justifyContent="space-between">
      <NewsTitle>{title}</NewsTitle>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {width > 600 && (
          <NewsButton
            disabled={btnstate.left === true ? false : true}
            side="left"
            visibility={innerdata.length <= 3 ? "hidden" : "visible"}
            onClick={() => move("left")}
          >
            <ArrowInCircleIcon />
          </NewsButton>
        )}
        <NewsContainer>
          <Stack gap={width > 1635 ? "24px" : "2vw"} flexDirection="row">
            {innerdata.map((carddata, index) => (
              <div key={index}>
                <Stack flexDirection="column" justifyContent="left">
                  <NewsCard
                    direction={direction}
                    date={carddata.date}
                    image={carddata.image}
                    header={carddata.header}
                    text={carddata.text}
                    link={carddata.link}
                    moveleft={data.length <= 3 ? false : true}
                  />
                </Stack>
              </div>
            ))}
          </Stack>
        </NewsContainer>
        {width > 600 && (
          <NewsButton
            disabled={btnstate.right === true ? false : true}
            side="right"
            visibility={innerdata.length <= 3 ? "hidden" : "visible"}
            onClick={() => move("right")}
          >
            <ArrowInCircleIcon />
          </NewsButton>
        )}
      </Stack>
    </Stack>
  );
};

export default NewsCarousel;
