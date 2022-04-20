import React from "react";
import styled from "styled-components";
// import { Image, Cards } from "./";
import { QuotationIcon } from "../assets/icons/quotationIcon"
import defaultImage from "../assets/images/userDefault.png"
// import vectorImage from "../assets/images/Vector.png"

export const CardContainer = styled.div`
    height: 800px;
    width: 100%;
    display:flex;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
    
    @media screen and (max-width: 540px) {
        flex-direction: column;
       
        
}

`;
 

export const ImageContainer = styled.div`
    background-image: url(${props => props.imageUrl ? props.imageUrl : defaultImage});
    background-repeat:  no-repeat;
    background-size: cover;
    height: 500px;
    width: 50%;

    @media screen and (max-width: 540px) {
        width: 100%;
        height: 800px;
}
`

// export const ArrowContainer = styled.div`
//     background-image: url(${props => props.ArrowUrl ? props.ArrowUrl : vectorImage}); 
//     height: 26px;
//     width: 22px;
//     position: relative;
//     left: 200px;
//     bottom: 60px;
// `

export const QuoteContainer = styled.div`
    background-color: rgb(239, 246, 254);
    height: 500px;
    width: 50%;
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 540px) {
        width: 100%;
        height: 800px;
}
`

export const IconContainer = styled.div`
    position: absolute;
    top: 80px;
    left: 70px;

    @media screen and (max-width: 540px) {
        width: 50%;
        
}
`

export const Author = styled.div`
    font-size: 20px;
    position: relative;
    left: 20px;
`

export const Text = styled.div`
    font-size: 18px;
`

export const Position = styled.div`
    font-size: 16px;
    position: relative;
    left: 20px;

`

export const PositionContainer = styled.div`
    display: flex;
    flex-direction: column;     
    width: 300px;
    position: relative;
    top: 10px;
`

export const Comments = ({ imageUrl, text, author, position }) => {
    return (
        <CardContainer>
            <ImageContainer imageUrl={imageUrl}>
            </ImageContainer>
            <QuoteContainer>
                <IconContainer>
                    <QuotationIcon />
                </IconContainer>

                <div style={{ maxWidth: '300px' }}>{text}</div>  
                {/* <ArrowContainer>{ArrowUrl}</ArrowContainer> */}
                <PositionContainer>
                    <Author>{author}</Author>
                    <Position>{position}</Position>
                </PositionContainer>


            </QuoteContainer>
        </CardContainer>
    )
}