import React from "react";
import styled from "styled-components";
import GetWindowSize from "../../../util/GetWindowSize";
import { Text } from "../../core";

const CardContainer = styled.div`
  @media screen and (max-device-width: 600px) {
    gap: "20px";
    width: "85vw";
  }
  @media not screen and (max-device-width: 600px) {
    justify-content: space-between;
    gap: "4vw";
    animation: move_anim 1s normal 0 1 normal normal;
    ${(props) => props.visibility && "visibility: hidden;"}
    ${(props) => props.moveleft && " transform: translateX(-28vw);"}
  }
  flex-direction: column;
  display: flex;
  height: fit-content;
  align-items: center;
  margin: "0";
  /* overflow-x: scroll; */
  animation: ${(props) =>
      props.direction === "right"
        ? "move_anim_right"
        : props.direction === "left" && "move_anim_left"}
    0.8s;
  @keyframes move_anim_right {
    0% {
      transform: translateX(-28vw);
    }
    100% {
      transform: translateX(-56vw);
    }
  }
  @keyframes move_anim_left {
    0% {
      transform: translateX(-28vw);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
const Text_Column = styled.div`
  @media screen and (max-device-width: 600px) {
    width: 60vw;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  @media not screen and (max-device-width: 600px) {
    width: 26vw;
    margin-top: 10px;
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Image = styled.div`
  @media screen and (max-device-width: 600px) {
    width: 85vw;
    height: 53vw;
    border-radius: 4px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${(props) => props.image});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  @media not screen and (max-device-width: 600px) {
    width: 26vw;
    height: 16.6vw;
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
  position: relative;
  display: flex;
  align-items: end;
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

const Text_Container = ({ header, text, window_width }) => {
  return (
    <Text_Column>
      <Text color={window_width < 600 ? "white" : "#0C265C"} type="T1">
        {header}
      </Text>
      <Text color={window_width < 600 ? "white" : "#0C265C"} type="T2">
        {text}
      </Text>
    </Text_Column>
  );
};
export const NewsCard = ({
  date,
  direction,
  image,
  moveleft,
  header,
  text,
}) => {
  const { window_width } = GetWindowSize();
  function Shorten(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  if (window_width < 400) text = Shorten(text, 80);
  else if (window_width < 1400) text = Shorten(text, 100);
  if (typeof image === "object") image = JSON.stringify(image);

  return (
    <CardContainer direction={direction} moveleft={moveleft}>
      <Image image={image}>
        {window_width > 600 && (
          <>
            <EventLine />
            <EventText>Event</EventText>
          </>
        )}
        {window_width < 600 && (
          <>
            <Text_Container
              window_width={window_width}
              header={header}
              text={text}
              date={date}
            />
            <DateBackground>
              <Text>{date}</Text>
            </DateBackground>
          </>
        )}
      </Image>
      {window_width > 600 && (
        <Text_Container
          window_width={window_width}
          date={date}
          header={header}
          text={text}
        />
      )}
    </CardContainer>
  );
};

export default NewsCard;
