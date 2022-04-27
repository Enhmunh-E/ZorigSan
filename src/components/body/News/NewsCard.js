import React from "react";
import styled from "styled-components";
import GetWindowSize from "../../../util/GetWindowSize";

const Container = styled.div`
  @media screen and (max-device-width: 600px) {
    gap: "20px";
  }
  @media not screen and (max-device-width: 600px) {
    justify-content: space-between;
    gap: "4vw";
  }
  flex-direction: column;
  width: "85vw";
  display: flex;
  height: fit-content;
  align-items: center;
  margin: "0";
`;
const Text_Column = styled.div`
  @media screen and (max-device-width: 600px) {
    width: 60vw;
    height: 100px;
    margin-bottom: 10px;
  }
  @media not screen and (max-device-width: 600px) {
    width: 26vw;
    height: 150px;
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
    color: white;
    margin-left: 10px;
  }
  @media screen and (max-device-width: 400px) {
    font-size: 11px;
    line-height: 18px;
  }
  text-align: left;
  font-weight: ${(props) => (props.type === "heading" ? "700" : "400")};
  ${(props) => (props.type === "heading" ? "" : "margin: 10px 0 10px 0")};
  font-family: "Montserrat";
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

const Text_Container = ({ color, date, header, line, text, type }) => {
  const { window_width } = GetWindowSize();
  return (
    <Text_Column type={type}>
      <Text color={color} type="heading" cardtype={type}>
        {header}
      </Text>
      <Text color={color} type="title" cardtype={type}>
        {text}
      </Text>
      {type === "small" ? (
        window_width > 600 && (
          <Text style={{ color: "black", fontWeight: "500", margin: "0" }}>
            {date}
          </Text>
        )
      ) : (
        <></>
      )}
      <div>{line === true && <Line />}</div>
    </Text_Column>
  );
};
export const NewsCard = ({ date, image, header, text }) => {
  const { window_width } = GetWindowSize();
  let width;
  let height;
  let minwidth;
  let minheight;
  if (typeof image === "object") image = JSON.stringify(image);

  return (
    <Container height={height} width={width}>
      <Image
        window_width={window_width}
        image={image}
        minheight={minheight}
        minwidth={minwidth}
      >
        {window_width > 600 && (
          <>
            <EventLine />
            <EventText>Event</EventText>
          </>
        )}
        {window_width < 600 && (
          <>
            <Text_Container header={header} text={text} date={date} />
            <DateBackground>
              <Text style={{ color: "black", fontWeight: "400", margin: "0" }}>
                {date}
              </Text>
            </DateBackground>
          </>
        )}
      </Image>
      {window_width > 600 && (
        <Text_Container date={date} header={header} text={text} />
      )}
    </Container>
  );
};

export default NewsCard;
