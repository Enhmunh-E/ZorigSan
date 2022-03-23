import React from 'react';
import styled from 'styled-components';
import HLogo from '../assets/images/icon/HLogo'


const Contener = styled.div`
width:100% ;
height:306px;
display: flex;
align-items: center;
justify-content: space-evenly;
@media (max-width: 415px) {
    width:100% ;
    height:672px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}
`;
const SmallText = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.25px;
color: #202020;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
word-break: break-word;
@media (max-width: 415px) {

    text-align:center;
}

`;
const BigText = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.15px;
color: #202020;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
display:flex;
justify-content: center;
word-break: break-word;
@media (max-width: 415px) {

    text-align:center;
}
`;


export const Footer = () => {
        return(
            <Contener>
                <HLogo/>
                <div>
                <BigText>Services</BigText>
                <SmallText>Link 1</SmallText>
                <SmallText>Link 1</SmallText>
                <SmallText>Link 1</SmallText>
                </div>
                <div>
                <BigText>Company</BigText>
                <SmallText>Link 1</SmallText>
                <SmallText>Link 1</SmallText>
                <SmallText>Link 1</SmallText>
                </div>
                <div>
                <BigText>Contact</BigText>
                <SmallText>Link 1</SmallText>
                <SmallText>Link 1</SmallText>
                <SmallText>Link 1</SmallText>
                </div>
            </Contener>
        )
}
export default Footer;