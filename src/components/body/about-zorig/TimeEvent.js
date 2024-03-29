import React from "react";
import styled from "styled-components";
import { Stack, Text } from "../../core";
import { graphql, useStaticQuery } from "gatsby";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {
  Container,
  Ball,
  Information,
  Description,
  Event,
  Image,
  HugeText,
  History,
} from "./";

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
          <p style={{ fontWeight: "400", whiteSpace: "pre-line" }}>{text}</p>
        </Text>
      );
    },
  },
};

export const TimeEvent = ({ year, event, image, last }) => {
  const BoxEvent = styled.div`
    width: 100%;
    padding-bottom: 200px;
    border-left: ${last ? "none" : "1px solid rgba(12, 38, 92, 0.4)"};
    padding-left: 72px;

    @media only screen and (max-width: 960px) {
      // width: 100vw;
      padding-left: 20px;
    }
  `;

  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutZorigPage {
        nodes {
          historyText {
            raw
          }
          historyTitle
        }
      }
    }
  `);
  const { nodes } = data.allContentfulAboutZorigPage;
  const { historyText, historyTitle } = nodes[0];

  return (
    <Container>
      <BoxEvent>
        <Ball />
        <Information>
          <Stack flexDirection="column" gap="36px">
            <Description>
              <Stack flexDirection="column" gap="16px">
                <Text color="#0C265C" type="H3">
                  {year}
                </Text>

                <Event>
                  <Text color="#0C265C" type="T1" style={{ fontWeight: "400" }}>
                    {event}
                  </Text>
                </Event>
              </Stack>
            </Description>

            <Image>
              <img
                style={{ height: "100%", objectFit: "cover", width: "100%" }}
                src={image}
              />
            </Image>
          </Stack>
        </Information>
      </BoxEvent>

      {last && (
        <BoxEvent style={{ paddingBottom: "30px", paddingLeft: "0px" }}>
          <HugeText>
            <Stack gap="20px" flexDirection="column">
              <Text color="#0C265C" type="H3">
                {historyTitle}
              </Text>
              <History>
                {data && renderRichText(historyText, richTextRenderOptions)}
              </History>
            </Stack>
          </HugeText>
        </BoxEvent>
      )}
    </Container>
  );
};
