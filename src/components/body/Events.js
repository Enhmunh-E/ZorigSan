/* eslint-disable */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
// import useWindowDimensions from "../../functions/useWindowDimensions";
import { EventCart } from "./EventCart";
/* eslint-disable complexity */
const Container = styled.div`
  width: 100vw;
  min-height: 806px;
  display: flex;
  justify-content: center;
`;
const Flex = styled.div`
  width: 1360px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1100px) {
    height: 699px;
  }
  @media (max-width: 800px) {
    height: 634px;
  }
  @media (max-width: 700px) {
    width: 540px;
    height: 100%;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;
const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  @media (max-width: 700px) {
    width: 100%;
    height: 482px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Text = styled.div`
  height: 280px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  text-transform: uppercase;
  font-feature-settings: "case" on;
  color: #0c265c;
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    font-size: 39px;
  }
  @media (max-width: 800px) {
    font-size: 38px;
  }
  @media (max-width: 700px) {
    font-size: 37px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
  }
`;
export const Events = (props) => {
  const { events } = props;
  return (
    <div
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      <Text>Хөтөлбөрүүд</Text>
      <Container>
        <Flex>
          {events.map((event, index) => {
            if (index % 2 == 0) {
              return (
                <Div key={index}>
                  <EventCart
                    title={event.title}
                    paddingTop={"44px"}
                    img={event.img}
                  />
                  {events[index + 1] && (
                    <EventCart
                      title={events[index + 1].title}
                      img={events[index + 1].img}
                    />
                  )}
                </Div>
              );
            }
          })}
        </Flex>
      </Container>
    </div>
  );
};