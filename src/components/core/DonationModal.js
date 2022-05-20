import React, { useMemo } from "react";
import styled from "styled-components";
import { Text, Stack, Padding } from "../core";
import { ModalCloseIcon } from "../../assets/icons";
import ZorigLogo from "../../assets/images/zorig-foundation-mongolia.png";
import useWindowDimensions from "../../functions/useWindowDimensions";
import { graphql } from "gatsby";

const query = graphql`
  query allContentfulPayment {
    allContentfulPayment {
      nodes {
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

export const DonationModal = ({ data, setModal }) => {
  const { width } = useWindowDimensions();
  const phone = useMemo(() => {
    return width <= 680;
  }, [width]);
  const close = () => {
    setModal(false);
  };
  console.log(data);
  return (
    <ModalContainer>
      {phone === false ? (
        <Container>
          <Stack>
            <Padding size={[24, 24, 24, 24]}>
              <Stack flexDirection={"column"}>
                <Stack alignItems={"center"} gap={"12px"}>
                  <div style={{ cursor: "pointer" }} onClick={close}>
                    <ModalCloseIcon />
                  </div>
                  <Text color={"#0C265C"}>Буцах</Text>
                </Stack>
                <Padding size={[80, 56, 32, 56]}>
                  <Text
                    style={{ lineHeight: "22px" }}
                    type={"T1Bold"}
                    color={"#0C265C"}
                  >
                    Зориг сангийн хүслийг өнөөдөр биелүүлээрэй
                  </Text>
                  {/* <Padding size={[32, 0, 0, 0]}>
                    <Text
                      style={{ lineHeight: "32px" }}
                      type={"T3"}
                      color={"#0C265C"}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </Text>
                  </Padding> */}
                  <Padding size={[72, 0, 0, 0]}>
                    <Text
                      style={{ lineHeight: "32px" }}
                      type={"T3"}
                      color={"#0C265C"}
                    >
                      Бидэнтэй танилцаx
                    </Text>
                  </Padding>
                </Padding>
              </Stack>
            </Padding>
            <ZorigLogoStyle src={ZorigLogo} />
          </Stack>
        </Container>
      ) : (
        <></>
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  z-index: 100;
  width: 818px;
  height: 421px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const ZorigLogoStyle = styled.img`
  height: 100%;
`;