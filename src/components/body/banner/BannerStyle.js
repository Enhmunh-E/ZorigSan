import styled from "styled-components";

export const BannerCon = styled.div`
  width: 100vw;
  height: ${(props) => (props?.bannerHeight ? props?.bannerHeight : "720px")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerImg = styled.img`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: ${(props) => (props?.bannerHeight ? props?.bannerHeight : "720px")};
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerImgFilter = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: ${(props) => (props?.bannerHeight ? props?.bannerHeight : "720px")};
  background-color: #0f317680;
  backdrop-filter: blur(10px);
`;

export const BannerHaalt1 = styled.div`
  width: 45%;
  position: relative;
  top: 40px;
  left: -15px;
  @media only screen and (max-width: 540px) {
    top: 25px;
    left: 0;
  }
`;

export const BannerHaalt2 = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 35px;
  @media only screen and (max-width: 960px) {
    width: 80%;
  }
  @media only screen and (max-width: 540px) {
    width: 100%;
    bottom: 15px;
  }
`;

export const BannerTitleCon = styled.div`
  width: calc(100% - 64px);
  padding-left: 32px;
  padding-right: 32px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 1384px) {
    width: 1320px;
  }
  @media only screen and (max-width: 960px) {
    width: calc(100% - 64px);
  }
`;

export const BannerTitle = styled.div`
  margin: 0;
  width: 880px;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const BannerDescription = styled.div`
  position: relative;
  top: -50px;
  @media only screen and (max-width: 540px) {
    top: 0;
  }
`;