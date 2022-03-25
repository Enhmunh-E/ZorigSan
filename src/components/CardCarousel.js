import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Buttons from './Buttons'

const Wrapper = styled.div`
  position: relative;
  width: 75vw;
  overflow: hidden;

`;
const Slide = styled.div`
  display: flex;
  width: 75vw;
  height: 40vw;
  transition: transform 1s ease-out;
  transform: ${props => `translateX(${props.xPosition}px)`};
    div {
        width: 75vw;
        height: 100%;
        display: flex;
        flex-direction: row;
        background-color: #EEF6FF;
        img{
            width: 50%;
            height: 100%;
            border-radius: 10px;
        }
    }
`;
function Carousel({ arr }) {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);



    const handleClicknext = () => {
        if (index === arr.length - 1) {
            setIndex(0);
            setXPosition(0);
        } else {
            setIndex(index + 1);
            setXPosition(0 - width * (index + 1));
        }
    };
    console.log(xPosition);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleClicknext()
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [xPosition]);
    const slideRef = useRef();
    useEffect(() => {
        if (slideRef.current) {
            const width = slideRef.current.clientWidth;
            setWidth(width);

        }
    }, [xPosition]);
    return (
        <div>
            <Wrapper>
                <Slide xPosition={xPosition} ref={slideRef}>
                    {arr.map((el, i) => (
                        <div key={i}>
                            <img src={el.src} alt={''} />
                            <div >{el.text}</div>
                        </div>
                    ))}
                </Slide>
                <Buttons
                    handleClicknext={handleClicknext}
                />
            </Wrapper>

        </div>

    );
}
export default Carousel;