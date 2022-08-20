import React from "react";
import styled from "styled-components";
import ProgramsCard from "../components/body/programsCard";
import { Header } from "../components/core";
import { Stack, Padding } from "../components/core";
import { Title } from "../components/body";
import { Footer } from "../components/footer";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/Styles.css";
/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable complexity */
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BigContainer = styled.div`
  overflow-x: hidden;
  width: 100vw;
`;

const TitleContainer = styled.div`
  color: #0c265c;
  width: 100%;
  margin-bottom: 8%;
  align-items: center;
`;

export const ProgramsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProgramTypes {
        nodes {
          title
          shortDescription
          image {
            file {
              url
            }
          }
          contentful_id
          program_page {
            title
            description
          }
          program {
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  return (
    <BigContainer>
      <Header color="primary-blue" width="80%" />
      <MainContainer>
        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          style={{ width: "90vw" }}
        >
          <Padding size={[200, 0, 200, 0]}>
            <TitleContainer>
              <Title
                title={
                  data.allContentfulProgramTypes.nodes[0].program_page[0].title
                }
                subtitle={
                  data.allContentfulProgramTypes.nodes[0].program_page[0]
                    .description
                }
              />
            </TitleContainer>

            <Stack gap="5vh" flexDirection="column">
              {data.allContentfulProgramTypes.nodes.map((event, index) => {
                return <ProgramsCard cardData={event} />;
              })}
            </Stack>
          </Padding>
        </Stack>
      </MainContainer>

      <Footer />
    </BigContainer>
  );
};

export default ProgramsPage;
