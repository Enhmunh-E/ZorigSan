import React, { useEffect, useState, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header, Text, Margin, Stack, Padding } from "../components/core";
import { Card, CardMobile } from "../components/body";
import { Footer } from "../components/footer";
import useWindowDimensions from "../functions/useWindowDimensions";

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
  @media only screen and (max-width: 540px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

const EventCategories = ({ pageContext }) => {
  const [data, setData] = useState({});
  const { width } = useWindowDimensions();
  useEffect(async () => {
    await setData(pageContext.data);
  }, []);
  const phone = useMemo(() => {
    return width <= 540;
  }, [width]);
  return (
    <div>
      <GlobalStyle />
      <Header color={"primary-blue"} />
      <Margin size={[180, 0, 0, 0]}>
        <ECContainer>
          <ECContainer2>
            <Padding size={[0, 24, 0, 24]}>
              <Stack
                flexDirection={"column"}
                alignItems={"center"}
                gap={phone === false ? "32px" : "16px"}
              >
                <Text
                  style={{ textAlign: "center" }}
                  type={"H1Bold"}
                  color={"#0C265C"}
                >
                  {data.title}
                </Text>
                <Text type={"T2"} color={"#0C265C"}>
                  {data.longDescription?.longDescription}
                </Text>
              </Stack>
            </Padding>
            <Margin size={[64, 0, 64, 0]}>
              <Stack
                flexDirection={"column"}
                gap={phone === false ? "128px" : "48px"}
              >
                {data.program?.map((el, index) =>
                  phone === false ? (
                    <Card
                      name={el.name}
                      image={el.image.file.url}
                      description={el.description.description}
                      key={index}
                      index={index}
                      link={`${data.contentful_id}/${el.contentful_id}`}
                    />
                  ) : (
                    <CardMobile
                      name={el.name}
                      image={el.image.file.url}
                      description={el.description.description}
                      key={index}
                      link={`${data.contentful_id}/${el.contentful_id}`}
                    />
                  )
                )}
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
