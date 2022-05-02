import styled from "styled-components";
import React from "react";

const BgContainer = styled.div`
    z-index: 99;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const BlurBG = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(12, 38, 92, 0.52);
    backdrop-filter: blur(32px);
    z-index: 99;
    overflow: hidden;
`

export const Modal = ({children, setModal}) => {
    const close = () => {
        setModal(false);
    }
    return(
        <BgContainer>
            <BlurBG onClick={close}/>
            {children}
        </BgContainer>
    )
}

export default Modal