import React from 'react';
import styled from 'styled-components';
import { Border } from './border';
import { Margin } from './Margin';
import { Padding } from './Padding';

const Item = styled.button`
    display:flex;
    flex-direction:row;
    background-color: ${(props) => (props.isSelected ? '#FFFFFF' : '#1C4984')};
    font-size: 15px;
    font-family: sans-serif;
    color: ${(props) => (props.isSelected ? '#1C4984' : '#FFFFFF')};
    line-height: ${(props) => props.lineHeight}px;
    font-weight: lighter;
    border-radius:20px;
    border-style: none;
    padding: 3px 25px;
    height: 26px;
`;
const DivStyle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    background-color:#1C4984;
    border-radius:50px;
    width: ${(props) => props.w}px;
    height: 40px;
    padding: 0px 8px;
`;
export function SelectButtons({ items, buttonHandler }) {
  const [ select, setSelect ] = React.useState(0);
  return (
    <div style={{
      display: 'flex',
    }}
    >
      <DivStyle>
        {
                items.map((item, index) => (
                  <Item
                    isSelected={select === index}
                    lineHeight="22"
                    onClick={() => {
                      setSelect(index);
                      buttonHandler(index);
                    }}
                    key={index}
                  >
                    {item}
                  </Item>
                ))
            }
      </DivStyle>
    </div>

  );
}
