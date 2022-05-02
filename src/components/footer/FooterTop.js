import Subscribe from "./Subscribe";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    height: 226px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1202px) {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
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
            {/* <ContentContainer> */}
                <div>
                    <Title>You made it this far.</Title>
                    <Subtitle>Football, foot massage, Foot Locker.</Subtitle>
                </div>
                <Subscribe/>
        </Container>
    )
}

export default FooterTop