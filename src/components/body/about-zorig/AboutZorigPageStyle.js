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
  @media only screen and (min-width: 2200px) {
    width: 1920px;
  }
`;

export const RightSide = styled.div`
  width: 70%;
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
  width: 48%;
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
