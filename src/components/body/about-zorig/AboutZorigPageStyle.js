import { Stack } from "../..//core";
import styled from "styled-components";

export const FullContainer = styled(Stack)`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 200px;
`;

export const AnotherBS = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    width: 1920px;
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  display: none;
  @media only screen and (min-width: 960px) {
    width: 40%;
    display: block;
  }
`;
export const RightSide = styled.div`
  width: 60%;
  padding-right: 32px;
  padding-left: 32px;
  @media only screen and (max-width: 960px) {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export const ZorigInformationContainer = styled(Stack)`
  width: 74%;
  height: 410px;
  display: flex;
  padding-top: 60px;

  @media only screen and (max-width: 960px) {
    width: 100%;
    padding-top: 0;
  }
`;

export const ZorigInformation = styled(Stack)`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`;

export const ZorigName = styled(Stack)`
  height: 100%;
`;

export const ZorigBirthInfo = styled.div`
  height: 100%;
`;

export const ZorigBirthDate = styled.div`
  width: 100%;
`;

export const ZorigBirthPlace = styled.div`
  width: 100%;
`;

export const ZorigLine = styled.div`
  width: 46px;
  height: 0px;
  border: 2px solid #0c265c;
`;

export const Container = styled.div`
  padding-left: 5px;
  position: relative;
`;

export const Ball = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #0c265c;
  border-radius: 50%;
`;

export const Information = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  height: 88px;
  width: 100%;
`;

export const Event = styled.div`
  width: 90%;
`;

export const Image = styled.div`
  width: 100%;
`;

export const HugeText = styled.div`
  width: 100%;
`;

export const History = styled.div``;
export const ZorigPhoto = styled.div`
  position: fixed;
  top: 104px;
  left: 0;
  width: 40vw;
`;
