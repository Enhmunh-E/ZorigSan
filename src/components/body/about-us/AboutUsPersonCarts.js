import React from "react";
import styled from "styled-components";
import { Image } from "../../core";
/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable complexity */
const Card = styled.div`
  width: 225px;
  margin: 50px;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* padding: ; */
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 650px) {
    flex-wrap: nowrap;
  }
`;
const BigText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding-top: 16px;
`;
const SmallText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  opacity: 0.6;
  padding-top: 8px;
`;
export const StaffCart = (props) => {
  const { staffs } = props;
  return (
    <Container>
      {staffs.map((staff, index) => {
        if (staff.level !== 0) {
          return (
            <Card key={index}>
              <Image width={"225"} height={"318"} src={staff.img.file.url} />
              <BigText>{staff.name}</BigText>
              <SmallText>{staff.position}</SmallText>
            </Card>
          );
        }
      })}
    </Container>
  );
};
export const CEOCart = (props) => {
  const { ceo } = props;
  return (
    <Container>
      <Card>
        <Image width={"225"} height={"318"} src={ceo.img.file.url} />
        <BigText>{ceo.name}</BigText>
        <SmallText>{ceo.position}</SmallText>
      </Card>
    </Container>
  );
};