import * as React from "react";
import { Button, Stack, Text,Padding } from "../core";
import styled from "styled-components";
import { Link } from "gatsby";

const CardContainer = styled(Stack)`
  position: relative;
  width: 100%;
  height: 40vh;
`;
const InfoImageContainer = styled(Stack)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ url }) => `url(${url})`};
`;
const InfoTextContainer = styled(Stack)`
  position: absolute;
  bottom: 0;
  left: 0;
  width:30%;
  padding: 200px 50px 50px 20px;

  @media (max-width: 750px){
    width: 100%
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const InfoImageContainerBlur = styled(InfoImageContainer)`
  width: 35%;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(15, 49, 118, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px 0px 0px 8px;
  @media (max-width: 750px){
    background: linear-gradient(0deg, #000000 -6.4%, rgba(0, 0, 0, 0) 113.43%);
    width:100%
  }
`;
const InfoText=styled.div`
${(props) => (props.width ? `width: ${props.width}` : "")};
font-size:30px;
color:white;
font-family: Montserrat;
font-weight:600;
@media (max-width:1041px){
  font-size:25px;
}
@media (max-width: 817px){
  font-size:21px
}
@media(max-width: 750px){
  width:100%;
  text-align:start
}
`;
const DescText = styled(Text)`
${(props) => (props.width ? `width: ${props.width}` : "")};
@media (max-width: 1175px){
  display:none
}

`

const DescButton = styled(Button)`
@media (max-width: 750px){
  color:#0C265C;
  background-color: white !important;
  width: 90% !important;
}
`
const ProgramsCard = ({ cardData }) => {
  const event = cardData;
  return (
    <CardContainer flexDirection="row">
      <InfoImageContainer url={event.image.file.url}>
      </InfoImageContainer>
      <InfoImageContainerBlur />
      <InfoTextContainer
        flexDirection="column"
        gap="18px"
      >
        <InfoText width="70%">
          {event.title}
        </InfoText>
        <DescText width="85%" type="T3" color="white">
          {event.shortDescription}
        </DescText>
        <Link style={{width: '90%'}} to={`/${event.contentful_id}`}>
          <DescButton
            title={"Дэлгэрэнгүй"}
            bgColor={"primary-blue"}
            f_size={"T3"}
            f_weight={500}
            color={"primary-white"}
          />
        </Link>
      </InfoTextContainer>
    </CardContainer>
  );
};

export default ProgramsCard;
