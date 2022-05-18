import React from "react";
import styled from "styled-components";
import { Header } from "../components/core";
import { Footer } from "../components/footer";
import { Donation } from "../components/body/Donation";
import { Stack, Text } from "../components/core";
import useWindowDimensions from "../functions/useWindowDimensions";
// import Pic from "../assets/images/news.png";
import { Carousel } from "../components/body";
// import { Image } from "../components/core";
import { graphql, useStaticQuery } from "gatsby";

export const WholeContainer = styled(Stack)`
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

export const Image = styled.img`
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

export const InfoContainer = styled(Stack)`
  width: 100%;
  text-align: center;
  text-align: justify;
  @media (min-width: 0px) and (max-width: 540px) {
    oveflow: hidden;
    padding: 0;
  }
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 350px;
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

const News = () => {
  const { width } = useWindowDimensions();
  //   const [setData] = useState({});
  const data = useStaticQuery(graphql`
    query {
      allContentfulNews {
        nodes {
          title
          picture {
            file {
              url
            }
          }
        }
      }
    }
  `);
  console.log(data.allContentfulNews.nodes[1].picture);
  const images = data.allContentfulNews.nodes[0].picture;
  const text = data.allContentfulNews.nodes.title;
  return (
    <Stack flexDirection="column">
      <Header color={"primary-blue"} />

      <WholeContainer
        flexDirection="column"
        gap={width > 540 ? "50px" : "20px"}
      >
        <Carousel arr={images} WrapperWidth={"100vw"}>
          {images.map((el, i) => {
            console.log(el.file.url);
            return (
              <div key={i} style={{}}>
                <Image
                  src={el.file.url}
                  borderRadius={"8px"}
                  width={"100vw"}
                  height={"80vh"}
                />
              </div>
            );
          })}
        </Carousel>
        <InfoContainer justifyContent="center" gap="10px">
          {text?.map((el, i) => {
            console.log(el);
            return (
              <div text={i} key={i}>
                <Text type="H4"></Text>
              </div>
            );
          })}
        </InfoContainer>

        <Donation />
      </WholeContainer>

      <Footer />
    </Stack>
  );
};

export default News;
