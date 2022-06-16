import React, { useMemo } from "react";
import styled from "styled-components";
import { Text, Stack, Padding } from "../core";
import { ModalCloseIcon, Arrow } from "../../assets/icons";
import ZorigsanText from "../../assets/icons/ZorigsanText";
import ZorigLogo from "../../assets/images/zorig-foundation-mongolia.png";
import useWindowDimensions from "../../functions/useWindowDimensions";
import { Link } from "gatsby";

export const DonationModal = ({ data, setModal }) => {
  const { width } = useWindowDimensions();
  const phone = useMemo(() => {
    return width <= 680;
  }, [width]);
  const close = () => {
    setModal(false);
  };
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
                    <Link to={"/about-us"} style={{ textDecoration: "none" }}>
                      <Stack
                        style={{ cursor: "pointer" }}
                        alignItems={"center"}
                        gap={"14px"}
                      >
                        <Text
                          style={{ lineHeight: "32px" }}
                          type={"T3"}
                          color={"#0C265C"}
                        >
                          Бидэнтэй танилцаx
                        </Text>
                        <Arrow color={"#0C265C"} />
                      </Stack>
                    </Link>
                  </Padding>
                </Padding>
              </Stack>
            </Padding>
            <ZorigLogoStyle src={ZorigLogo} />
            <DonationQR src={data[0].image.file.url} />
          </Stack>
        </Container>
      ) : (
        <PhoneDonation onClick={close}>
          <Stack flexDirection={"column"} gap={"64px"} alignItems={"center"}>
            <ZorigsanText />
            <PhoneDonationQR src={data[0].image.file.url} />
            <Text style={{ textAlign: "center" }} type={"Quote"} color={"#fff"}>
              Зориг сангийн хүслийг өнөөдөр биелүүлээрэй
            </Text>
          </Stack>
        </PhoneDonation>
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
  position: relative;
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

const DonationQR = styled.img`
  position: absolute;
  height: 150px;
  width: 150px;
  left: 60%;
  top: 135px;
  box-shadow: 0 0 15px 0 #404040;
`;

const PhoneDonationQR = styled.img`
  width: 231px;
  height: 231px;
  z-index: 100;
`;

const PhoneDonation = styled.div`
  z-index: 100;
  width: 90%;
`;