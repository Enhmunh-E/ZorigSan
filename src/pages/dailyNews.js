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
  }
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

  // const data = location.state;
  const data = {
    date: "2022.5.18",
    header: "Sample text, WOOOOOO",
    paragarph: {
      raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
    },
    picture: [
      {
        file: {
          url: "//images.ctfassets.net/wj41nhp3troa/2CwPhqMM5fQMXj1lkknMHU/a1bb5863c62f9dc5a0133bd4748ee7fd/Screen_Shot_2022-04-14_at_4.59_4.png",
        },
      },
      {
        file: {
          url: "//images.ctfassets.net/wj41nhp3troa/1eoFFN8c2e6Fj97BOWUEYR/f6f55b852f7eac213e4f3e65de3973f6/image_19.png",
        },
      },
    ],
  };
  return (
    <Stack flexDirection="column" alignItems="center">
      <Header color={"primary-blue"} />

      <WholeContainer
        flexDirection="column"
        gap={width > 540 ? "50px" : "0px"}
        justifyContent="center"
        alignItems="center"
      >
        <Carousel arr={data.picture} WrapperWidth={"80vw"}>
          {data.picture.map((el, i) => {
            console.log(el.file.url);
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
          <Text type="H1">{data.header}</Text>
          <Text type="T2Bold">{data.date}</Text>
        </TitleContainer>
        {renderRichText(data.paragarph, richTextRenderOptions)}
      </WholeContainer>
      <Donation />
      <Footer />
    </Stack>
  );
};

export default News;
