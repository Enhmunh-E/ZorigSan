import React, { useEffect, useState, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header, Margin, Text, Stack } from "../components/core";
import CircleCarousel from "../components/body/CircleCarousel";
import { Footer } from "../components/footer";
import useWindowDimensions from "../functions/useWindowDimensions";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container2 = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media only screen and (max-width: 1384px) {
    width: calc(100% - 64px);
  }
  @media only screen and (max-width: 540px) {
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
  }
`;
const FAQItem = styled.div`
  width: 30%;
  @media only screen and (max-width: 1384px) {
    width: 48%;
  }
  @media only screen and (max-width: 540px) {
    width: 100%;
  }
  padding: 16px 0px;
`;
const FAQContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 1384px) {
    width: calc(100% - 64px);
  }
  @media only screen and (max-width: 540px) {
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: contain;
`;
const Logo = styled.img`
  width: 40%;
  object-fit: contain;
  @media only screen and (max-width: 540px) {
    width: 80%;
  }
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

// eslint-disable-next-line complexity
const EventDetails = ({ pageContext }) => {
  const [data, setData] = useState({});
  const { width } = useWindowDimensions();
  useEffect(async () => {
    await setData(pageContext.data);
  }, []);
  const phone = useMemo(() => {
    return width <= 540;
  }, [width]);
  return (
    <Container>
      <GlobalStyle />
      <Header color={"primary-blue"} />
      <Margin size={phone === false ? [192, 0, 48, 0] : [140, 0, 48, 0]}>
        <Container2>
          <Stack flexDirection={"column"} gap={"8px"}>
            {data?.startDate && data?.endDate ? (
              <Text type={"H3"} color={"#0C265C"}>
                {data.startDate?.split("T")[0].split("-").join("/")} -{" "}
                {data.endDate?.split("T")[0].split("-").join("/")}
              </Text>
            ) : (
              <Text type={"H3"} color={"#0C265C"}>
                {data.startDate?.split("T")[0].split("-").join("/")}
              </Text>
            )}
            <NameContainer>
              <Text type={"Quote"} color={"#0C265C"}>
                {data.name}
              </Text>
              {data.logo && <Logo src={data.logo.file.url} />}
            </NameContainer>
          </Stack>
          <Margin size={phone === false ? [124, 0, 0, 0] : [48, 0, 0, 0]}>
            <Image src={data.image?.file.url} />
          </Margin>
          <Margin size={phone === false ? [48, 0, 0, 0] : [24, 0, 0, 0]}>
            <Text type={"H1"} color={"#0C265C"}>
              Ерөнхий мэдээлэл
            </Text>
          </Margin>
          <Margin size={phone === false ? [40, 0, 0, 0] : [16, 0, 0, 0]}>
            <Text color={"#0C265C"}>{data.description?.description}</Text>
          </Margin>
        </Container2>
      </Margin>
      {data.faq && data.faq.length !== 0 && (
        <>
          <Margin size={phone === false ? [40, 24, 0, 24] : [16, 0, 0, 0]}>
            <Text
              style={{
                textAlign: "left",
                width: "100%",
              }}
              type={"H1"}
              color={"#0C265C"}
            >
              Түгээмэл асуултууд
            </Text>
          </Margin>
          <FAQContainer>
            {data.faq?.map((faq, index) => (
              <FAQItem key={index}>
                <Margin size={[0, 0, 8, 0]}>
                  <Text
                    type={"T1"}
                    color={"#0C265C"}
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {faq?.question?.question}
                  </Text>
                </Margin>
                <Text color={"#0C265C"}>{faq?.answer?.answer}</Text>
              </FAQItem>
            ))}
          </FAQContainer>
        </>
      )}
      <Margin size={phone === false ? [124, 32, 48, 32] : [82, 32, 48, 32]}>
        <CircleCarousel
          arr={data.alumni}
          topTittle={"энэ хөтөлбөрийн амжилттай төгсөгчид"}
        />
      </Margin>
      <Footer />
    </Container>
  );
};

export default EventDetails;
