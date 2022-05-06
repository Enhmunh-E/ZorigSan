import React from "react";
import styled from "styled-components";
import GetWindowSize from "../../../util/GetWindowSize";
import { Text } from "../../core";
const CardContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: fit-content;
  align-items: center;
  margin: 0;
  @media (max-device-width: 600px) {
    gap: 20px;
    width: 85vw;
  }
  @media (min-device-width: 600px) {
    @media (max-device-width: 1200px) {
      @keyframes move_animation_right {
        100% {
          transform: translateX(-56vw);
        }
      }
    }
    @media (min-device-width: 1200px) {
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
    @media (max-device-width: 1200px) {
      ${(props) => props.moveleft && `transform: translateX(-28vw)`}
    }
    @media (min-device-width: 1635px) {
      ${(props) => props.moveleft && `transform: translateX(-448px)`}
    }
  }
`;
const Text_Column = styled.div`
  @media (max-device-width: 600px) {
    width: 60vw;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  @media (min-device-width: 600px) {
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
  @media (max-device-width: 600px) {
    width: 85vw;
    height: 53vw;
    border-radius: 4px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${(props) => props.image});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  @media (min-device-width: 600px) {
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
  else if (window_width < 1650) text = Shorten(text, 150);
  if (typeof image === "object") image = JSON.stringify(image);
  return (
    <CardContainer direction={direction} moveleft={moveleft}>
      <Image window_width={window_width} image={image}>
        {window_width > 600 ? (
          <>
            <EventLine />
            <EventText>Event</EventText>
          </>
        ) : (
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
