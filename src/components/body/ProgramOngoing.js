import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../functions/useWindowDimensions";
import { Stack, Text, Button } from "../core";

// import ArrowIcon from "../../assets/icons/arrow";
const Stylle = styled.div`
  color: #243C6C;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.001em;
  @media (max-width:540px){
    color: #243C6C;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0px;
  }
`;
const ProgramContainer = styled.div`
  height: 7%;
  padding-right:15%;
  padding-left:16%;
  display: flex;
  flex-direction: row;
  row-gap: 40%;
  align-items: normal;
  @media (max-width: 743px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 16px;
    padding-right:7%;
    padding-left:7%;
  }
`;
// const Arroww = styled.div`
// display:flex;
// @media (max-width: 743px) {
//   display: none;
// }
// `
const BigContainer = styled.div`
  width: 100vw;
  font-family:Montserrat;
  padding-top: 5%;
  padding-bottom: 5%;

`;
const LilContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  row-gap: 18px;
  @media (max-width: 743px) {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    row-gap: 15px;
  }
`;
export const ProgramOngoing = ({ name, date, desc, }) => {
  const { width } = useWindowDimensions();
  return (
    <BigContainer>
      <ProgramContainer>
        <Stack display="flex" flexDirection="column" rowGap="16px">
          <Text color="#00669A" type="T4" style={{ fontWeight: "bold", letterSpacing: "1.5px" }}>
            Бүртгэл явагдаж байна
          </Text>
          <Text color="#0C265C" type="H1">
            {name}
          </Text>
          <Text color="#243C6C" type="T2">
            {desc}
          </Text>
        </Stack>
        <Stack
          display="flex"
          flexDirection="column"
          rowGap="16px"
          justifyContent="center"
          style={{ width: "100%" }}
        >
          <LilContainer>
            <Text color="#243C6C" type="T2Bold" style={{ letterSpacing: "1.25px" }}>
              Бүртгэл дуусах хугацаа
            </Text>
            <Stylle f_size="34px">{date}</Stylle>
            <Button
              width={width > 540 ? 171 : ''}
              type={width > 540 ? "arrow" : ''}
              title={"Дэлгэрэнгүй"}
              bgColor={"primary-blue"}
              f_size={"T3"}
              f_weight={500}
              bRadius={4}
              color={"primary-white"} />
          </LilContainer>
        </Stack>
      </ProgramContainer>
    </BigContainer>
  );
};
export default ProgramOngoing;