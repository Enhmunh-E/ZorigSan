import React from "react";
import styled from "styled-components";
import { Text, Stack, Button } from '../core'

export const TextWrapper = styled.div`
    display: flex;
    text-align: center;
    position: relative;
    bottom: 20px;

`;

export const AllWrapper = styled.div`
    background-color: rgb(243, 243, 247);
    width: 100%;
    overflow: hidden;
    height: 300px;     


    @media only screen and (max-width: 414px) {
        background-color: white;
        overflow: hidden;
        height: 340px;
    }
`

export const BackWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 70px;
`

export const ArrowContainer = styled.div`
    width: 10px;
    height: 10px;
    position: relative;
    left: 11px;
    bottom: 1px;git 
`



export const Donation = ({ text }) => {
    return (
        <AllWrapper>
            <Stack flexDirection="column" alignItems="center" justifyContent='center' gap={'30px'}>
                <BackWrapper>
                    <TextWrapper>
                        <Text type="H1" color='#243C6C'>{text}</Text>
                    </TextWrapper>
                    <Button title={"хандив өгөх"} width={190} b_radius={3} f_weight={1} f_size="24px" type={"arrow"} bgColor={"primary-blue"} color={"primary-white"} />
                </BackWrapper>
            </Stack>
        </AllWrapper>
    )
}