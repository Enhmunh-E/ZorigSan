import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../functions/useWindowDimensions";
import { Text } from "../../core";

const CardContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: fit-content;
  align-items: center;
  margin: 0;
  pointer-events: none;
  @media screen and (max-width: 540px) {
    gap: 20px;
    width: 85vw;
  }
  @media not screen and (max-width: 540px) {
    @media screen and (max-width: 1650px) {
      @keyframes move_animation_right {
        100% {
          transform: translateX(-56vw);
        }
      }
    }
    @media not screen and (max-width: 1650px) {
      @keyframes move_animation_right {
        100% {
          transform: translateX(-896px);
        }
      }
    }
    @keyframes move_animation_left {
      100% {
        transform: translateX(0);
      }
    }
    justify-content: space-between;
    animation-name: ${(props) =>
      props.direction === "left"
        ? "move_animation_left"
        : props.direction === "right" && "move_animation_right"};
    animation-duration: 0.8s;
    @media screen and (max-width: 1650px) {
      ${(props) => props.moveleft && `transform: translateX(-28vw)`}
    }
    @media not screen and (max-width: 1650px) {
      ${(props) => props.moveleft && `transform: translateX(-448px)`}
    }
  }
`;
const Text_Column = styled.div`
  @media screen and (max-width: 540px) {
    width: 60vw;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  @media not screen and (max-width: 540px) {
    max-width: 424px;
    width: 26vw;
    margin-top: 10px;
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Image = styled.div`
  @media screen and (max-width: 540px) {
    width: 85vw;
    height: 53vw;
    border-radius: 4px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${(props) => props.image});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  @media not screen and (max-width: 540px) {
    width: 26vw;
    height: 16.6vw;
    max-width: 424px;
    max-height: 272px;
    border-radius: 8px;
    background: linear-gradient(
        360deg,
        rgba(65, 65, 65, 0.45) 0%,
        rgba(65, 65, 65, 0) 100%
      ),
      url(${(props) => props.image});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  transition: background-size 0.2s, background-position 1s;
  :hover {
    transition: background-size 0.5s, background-position 0.1s;
    background-position: center;
    background-size: 120% 120%;
  }
  position: relative;
  display: flex;
  align-items: end;
  cursor: pointer;
  pointer-events: all;
`;

const EventLine = styled.div`
  width: 3.32px;
  height: 30px;
  background: #ffffff;
  margin: 0 0 9px 15px;
`;
const EventText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  margin: 0 0 11px 15px;
`;

const DateBackground = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px 8px 24px;
  background: white;
  border-radius: 0 0 0 10px;
`;

const Hover = styled.div`
  pointer-events: all;
  background-image: "linear-gradient(to right, #0C265C, #0C265C 50%,#0C265C 50%)";
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  transition: all 0.3s ease-in-out;
  :before {
    content: "";
    background: "#0C265C";
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
  }
  :hover {
    background-position: 0;
  }
  :hover::before {
    width: 100%;
  }
`;

const Text_Container = ({ header, text, width, props }) => {
  return (
    <Text_Column>
      <Link to={"/dailyNews"} state={props}>
        <Hover>
          <Text color={width < 540 ? "white" : "#0C265C"} type="T1">
            {header}
          </Text>
        </Hover>
      </Link>
      <Text color={width < 540 ? "white" : "#0C265C"} type="T2">
        {text}
      </Text>
    </Text_Column>
  );
};
export const NewsCard = ({
  direction,
  date,
  image,
  moveleft,
  header,
  link,
  text,
  props,
}) => {

  
  function Shorten(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  let textConverted = JSON.parse(text.raw).content[0].content[0].value
  
  if (width < 540) textConverted = Shorten(textConverted, 50);
  else if (width < 1000) textConverted = Shorten(textConverted, 50);
  else textConverted = Shorten(textConverted, 80);
  const { width } = useWindowDimensions();
  console.log('aaadsdtastdashgdaskuygj')
  
  return (
    <CardContainer direction={direction} moveleft={moveleft}>
      <Link to={"/dailyNews"} state={props}>
        <Image width={width} image={image}>
          {width > 540 ? (
            <>
              <EventLine />
              <EventText>{header}</EventText>
            </>
          ) : (
            <>
              <Text_Container
                link={link}
                width={width}
                header={header}
                text={textConverted}
                props={props}
              />
              <DateBackground>
                <Text>{date}</Text>
              </DateBackground>
            </>
          )}
        </Image>
      </Link>
      {width > 540 && (
        <Text_Container
          link={link}
          width={width}
          text={textConverted}
          date={date}
          image={image}
          props={props}
        />
      )}
    </CardContainer>
  );
};

export default NewsCard;
