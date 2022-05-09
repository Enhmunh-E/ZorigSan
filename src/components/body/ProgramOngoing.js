import React from "react";
import styled from "styled-components";
import { Stack, Text } from "../core";

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
  }
`;
// const Arroww = styled.div`
// display:flex;
// @media (max-width: 743px) {
//   display: none;
// }
// `
const BigContainer = styled.div`
  width: 100%;
  font-family:Montserrat;
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
export const ProgramOngoing = () => {
  return (
    <BigContainer>
      <ProgramContainer>
        <Stack display="flex" flexDirection="column" rowGap="16px">
          <Text color="#00669A" type="T4" style={{fontWeight:"bold",letterSpacing:"1.5px"}}>
            Бүртгэл явагдаж байна
          </Text>
         <Text color="#0C265C" type="H1">
            Сурагч солилцооны хөтөлбөр 2022
          </Text>
          <Text color="#243C6C" type="T2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <Text color="#243C6C" type="T2Bold" style={{letterSpacing:"1.25px"}}>
              Бүртгэл дуусах хугацаа
            </Text>
            <Stylle f_size="34px">2022.04.20</Stylle>

            {/* <Button
              width="15%"
              height="100%"
              f_weight="400"
              l_spacing="1.25"
              b_radius="4"
              f_size="10px"
              type="secondary"
              style={{
                letterSpacing: "0.9px",
                padding: "8px 16px",
              }}
            >
              ДЭЛГЭРЭНГҮЙ
              <Arroww><ArrowIcon/></Arroww>
            </Button> */}
          </LilContainer>
        </Stack>
      </ProgramContainer>
    </BigContainer>
  );
};
export default ProgramOngoing;