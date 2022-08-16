import React from "react";
import styled from "styled-components";
import { Header } from "../components/core";
import { Footer } from "../components/footer";
import { Donation } from "../components/body/Donation";
import { Stack, Text } from "../components/core";
import useWindowDimensions from "../functions/useWindowDimensions";
import { Carousel } from "../components/body";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const richTextRenderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <Text type="T1Bold" color="#0C265C">
        {text}
      </Text>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_1]: (text) => {
      return (
        <>
          <h1>{text}</h1>
        </>
      );
    },
    [BLOCKS.HEADING_5]: (text) => {
      return (
        <>
          <h5>{text}</h5>
        </>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul>{children}</ul>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol>{children}</ol>;
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, text) => {
      return (
        <Text type="T1" color="#0C265C">
          <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </Text>
      );
    },
  },
};

export const WholeContainer = styled(Stack)`
  width: 80vw;
  height: 100%;
  margin-top: 100px;
`;

export const StyledImage = styled.img`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  border-radius: ${(props) => props.borderRadius && `${props.borderRadius}`};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  src: ${(props) => props.src && props.src};
  object-fit: cover;
`;

export const ImageText = styled(Stack)`
  position: absolute;
`;
export const PicContainer = styled.img`
  align-self: center;
`;

export const TitleContainer = styled(Stack)`
  width: 100%;
  text-align: center;
  text-align: justify;
  @media (min-width: 0px) and (max-width: 540px) {
    oveflow: hidden;
    padding: 0;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const DesktopShown = styled(Text)`
  display: flex;
  @media (min-width: 0px) and (max-width: 960px) {
    display: none;
  }
`;
export const DesktopHidden = styled(Text)`
  display: none;
  text-align: center;
  @media (max-width: 961px) {
    display: flex;
  }
`;

const News = ({ location }) => {
  const { width } = useWindowDimensions();

  // props={carddata}
  // direction={direction}
  // date={carddata.date}
  // image={carddata.picture[0].file.url}
  // header={carddata.header}
  // text={
  //   JSON.parse(carddata.paragarph.raw).content[0].content[0]
  //     .value
  // }

  const data = location.state;
  return (
    <Stack flexDirection="column" alignItems="center">
      <Header color={"primary-blue"} />

      <WholeContainer
        flexDirection="column"
        gap={width > 540 ? "50px" : "0px"}
        justifyContent="center"
        alignItems="center"
      >
        <Carousel arr={data?.picture} WrapperWidth={"80vw"}>
          {data?.picture.map((el, i) => {
            return (
              <div key={i} style={{}}>
                <StyledImage
                  src={el.file.url}
                  borderRadius={"8px"}
                  width={"80vw"}
                  height={"50vh"}
                />
              </div>
            );
          })}
        </Carousel>
        <TitleContainer
          flexDirection="row"
          justifyContent="space-between"
          gap="200px"
        >
          <Text type="H1">{data?.header}</Text>
          <Text type="T2Bold">{data?.date}</Text>
        </TitleContainer>
        {data?.paragarph &&
          renderRichText(data?.paragarph || { raw: "" }, richTextRenderOptions)}
      </WholeContainer>
      <Donation />
      <Footer />
    </Stack>
  );
};

export default News;
