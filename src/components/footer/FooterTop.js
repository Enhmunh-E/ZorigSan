import Subscribe from "./Subscribe";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 226px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const ContentContainer = styled.div`
    width: 67%;
    height: 100%;  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #E5E7EB;
    align-items: center
`

const TextContainer = styled.div`
    width: 415px;
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.18000000715255737px;
    text-align: left;
    color: #202020;
`

const Subtitle = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.0015em;
    text-align: left;
    color: #202020;
`

export const FooterTop = () => {
    return(
        <Container>
            <ContentContainer>
                <TextContainer>
                    <Title>You made it this far.</Title>
                    <Subtitle>Football, foot massage, Foot Locker.</Subtitle>
                </TextContainer>
                <Subscribe/>
            </ContentContainer>
        </Container>
    )
}

export default FooterTop