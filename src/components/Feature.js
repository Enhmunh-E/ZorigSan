import React from "react";
import styled from "styled-components";
import {Text, Stack} from '../components/core'


export const FeatureItem = styled(Stack)`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 290px) {
        flex-direction: column;
}
`

export const Feature = ({ pic, text, subtext, title , subtitle}) => {
    return (


        <Stack flexDirection="column" alignItems="center" gap="30px">


            <Stack textAlign="center">
                <FeatureItem flex-direction="column">
                    <Text type="heading1">{title}</Text>
                    <Text type="normal">{subtitle}</Text>
                </FeatureItem>
            </Stack>


            <Stack gap='50px' >
                <FeatureItem flexDirection="column">
                    {pic}
                    <Text type="title1_bold">{text}</Text>
                    <Text type="body">{subtext}</Text>
                </FeatureItem>
                <FeatureItem >
                    {pic}
                    <Text type="title1_bold">{text}</Text>
                    <Text type="body">{subtext}</Text>
                </FeatureItem>
                <FeatureItem >
                    {pic}
                    <Text type="title1_bold">{text}</Text>
                    <Text type="body">{subtext}</Text>
                </FeatureItem>     
            </Stack>
        </Stack>

    )
}