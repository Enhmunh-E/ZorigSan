import styled from "styled-components";
import React from "react";
import { NewsCard } from "./NewsCard";
import { Stack } from "../../core";

const Title = styled.h1`
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
  @media screen and (max-device-width: 800px) {
    font-size: 30px;
  }
`;
const Container = styled.div`
  @media screen and (max-device-width: 600px) {
    width: 100vw;
    overflow-x: scroll;
  }
  @media not screen and (max-device-width: 600px) {
    padding: 0 7.5vw 0 7.5vw;
    width: 80vw;
    overflow: hidden;
  }
`;

export const News = ({ data, title }) => {
  return (
    <Stack flexDirection="column" justifyContent="center">
      <Title>{title}</Title>
      <Container>
        <Stack gap="24px" justifyContent="space-between" flexDirection="row">
          {data.map((carddata, index) => (
            <div key={index}>
              <Stack flexDirection="column" justifyContent="left">
                <NewsCard
                  date={carddata.date}
                  image={carddata.image}
                  header={carddata.header}
                  text={carddata.text}
                />
              </Stack>
            </div>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default News;
