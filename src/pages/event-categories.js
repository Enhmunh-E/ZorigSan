import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Text, Margin, Stack } from "../components/core";
import { Card } from "../components/body";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
  }
`;
const ECContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ECContainer2 = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  @media only screen and (max-width: 1384px) {
    width: calc(100% - 64px);
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const EventCategories = ({ pageContext }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    await setData(pageContext.data);
  }, []);
  console.log(data);
  return (
    <div>
      <GlobalStyle />
      <Header color={"primary-blue"} />
      <Margin size={[180, 0, 0, 0]}>
        <ECContainer>
          <ECContainer2>
            <Stack flexDirection={"column"} alignItems={"center"} gap={"32px"}>
              <Text type={"H1"} color={"#0C265C"}>
                {data.title}
              </Text>
              <Text type={"T3"} color={"#0C265C"}>
                {data.longDescription?.longDescription}
              </Text>
            </Stack>
            <Margin size={[64, 0, 64, 0]}>
              <Stack flexDirection={"column"} gap={"128px"}>
                {data.event?.map((el, index) => (
                  <Card
                    name={el.name}
                    image={el.image.file.url}
                    description={el.description.description}
                    key={index}
                    index={index}
                  />
                ))}
              </Stack>
            </Margin>
          </ECContainer2>
        </ECContainer>
      </Margin>
      <Footer />
    </div>
  );
};

export default EventCategories;