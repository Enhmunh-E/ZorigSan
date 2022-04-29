import styled from "styled-components";
import React from "react";
import { NewsCard } from "./NewsCard";
import { Stack } from "../../core";
import { ArrowInCircleIcon } from "../../../assets/icons/arrowincircleIcon";
import GetWindowSize from "../../../util/GetWindowSize";

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
  @media screen and (max-device-width: 800px) {
    font-size: 30px;
  }
`;
const NewsContainer = styled.div`
  @media screen and (max-device-width: 600px) {
    width: 100vw;
    overflow-x: scroll;
  }
  @media not screen and (max-device-width: 600px) {
    width: 82vw;
    overflow: hidden;
  }
`;
const NewsButton = styled.button`
  width: fit-content;
  height: fit-content;
  background: 0;
  border: 0;
  cursor: pointer;
  margin-bottom: 8vh;
 ${(props) => props.side === 'right' ? '@media not screen and (max-device-width: 1200px) {transform: scale(1.5) rotate(180deg);} @media screen and (max-device-width: 1200px) {transform: rotate(180deg);}; margin-left: -5vw;' : '@media not screen and (max-device-width: 1200px) {transform: scale(1.5);};margin-right: -5vw'}
`;

export const NewsCarousel = ({ data, title }) => {
  const { window_width } = GetWindowSize();
  return (
    <Stack flexDirection="column" justifyContent="space-between">
      <NewsTitle>{title}</NewsTitle>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {window_width > 600 && <NewsButton side="left"><ArrowInCircleIcon/></NewsButton>}
        <NewsContainer>
          <Stack
            gap="2vw"
            justifyContent="space-between"
            flexDirection="row"
          >
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
        </NewsContainer>
        {window_width > 600 && <NewsButton side="right"><ArrowInCircleIcon/></NewsButton>}
      </Stack>
    </Stack>
  );
};

export default NewsCarousel;
