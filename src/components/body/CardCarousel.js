import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => `${props.width}`};
  overflow: hidden;
`;
const Slide = styled.div`
  display: flex;
  transition: transform 1s ease-out;
  transform: ${(props) => `translateX(${props.xPosition}px)`};
`;
export function Carousel({ arr, WrapperWidth, children }) {
  const [index, setIndex] = useState(-1);
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleClicknext();
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);
  const slideRef = useRef();

  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [xPosition]);
  return (
    <div>
      <Wrapper width={WrapperWidth}>
        <Slide width={WrapperWidth} xPosition={xPosition} ref={slideRef}>
          {children}
        </Slide>
      </Wrapper>
    </div>
  );
}
export default Carousel;
