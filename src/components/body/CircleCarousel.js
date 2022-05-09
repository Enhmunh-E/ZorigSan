import React, { useState } from 'react';
import styled from 'styled-components';
import { CarouselBack, CarouselNext, ProgramLogo } from '../../assets/icons';
import useWindowDimensions from '../../functions/useWindowDimensions';
import { Stack, Text } from '../core';

/* eslint-disable complexity */


const Program = ({program, angle, width, bottom}) => {
    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', height: width * 0.02 + 'px',justifyContent: 'center', width: width * 0.5 + 'px',}}>
            <ProgramLogo ></ProgramLogo>
            <Text style={{alignItems:'center', color: '#1C6DD0', display: 'flex',  width: width * 4+ 'px'}} type='T1'>{angle === 90 && bottom !== 0 ? program: ''}</Text>
        </div>
    );
};


const MainImage = styled.img`
    position: absolute;
    bottom: ${props => `${props.bottom - (props.height / 2)}px`};
    left: ${props => `${props.left - (props.width / 2)}px`};
    height: ${props => `${props.height}px`};
    width: ${props => `${props.width}px`};
    background: red;
    transition: all 1000ms;
    border-radius: 50%;
    ${(props) => (props.display === 'none' ? `display: none` : "")};
    ${(props) => (props.angle === 90 ? `  box-shadow: ${props.width * 0.015}px 10px ${props.width * 0.1}px #888888` : "")};
`;
const MainInfo = styled.div`
    position: absolute;
    bottom: ${props => `${props.bottom}px`};
    left: ${props => `${props.left}px`};
    height: ${props => `${props.size * 0.23}px`};
    width: ${props => `${props.size * 0.46}px`};
    transition: all 500ms;
    ${(props) => (props.display === 'none' ? `display: none` : "")};
`;
const CarouselBtn = styled.div`
    position: absolute;
    bottom: ${props => `${props.bottom}px`};
    left: ${props => `${props.left}px`};
    height: ${props => `${props.height}px`};
    width: ${props => `${props.width}px`};
    border-radius: 50%;
    transition: all 1000ms;
`



const CircleCarousel = ({ arr, topTittle }) => {
    const { width } = useWindowDimensions();
    const [go, setGo] = useState(0);
    const [move, setMove] = useState(false);
    const radius = (width) * 0.38;

    const elements = arr;
    const Prev = () => {
        if (!move) {
            if (go === 4) {
                setGo(-3)
            } else {
                setGo(go + 1)
            }
            setMove(true)
            const timer = setTimeout(() => {
                setMove(false)
            }, 500);
            return () => clearTimeout(timer);
        }
    }
    const Next = () => {
        if (!move) {
            if (go === -3) {
                setGo(4)
            } else {
                setGo(go - 1)
            }
            setMove(true)
            const timer = setTimeout(() => {
                setMove(false)
            }, 500);
            return () => clearTimeout(timer);
        }
    }
    return (
        <div>

            <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'column'} style={{ height: '100vh', width: '100vw', }}>
                <Text style={{ color: '#0C265B', marginBottom: width * 0.05 + 'px', textAlign: 'center' }} type='T0'> {topTittle}</Text>

                <div style={{
                    backgroundColor: 'white',
                    height: width * 0.5 + 'px',
                    position: 'relative',
                    width: width + 'px',
                }}>
                    {
                        elements.map((element, index) => {
                            const bottom = Math.sin(Math.PI / 4 * (index + 1 + go)) * radius / 2 + radius / 2;
                            const left = Math.cos(Math.PI / 4 * (index + 1 + go)) * radius + radius * 1.3;

                            const angle = Math.abs((180 / 4 * (index + 1 + go)) % 180);
                            // console.log('bottom',Math.round(bottom),'left', Math.round(left),'ind', index, 'angle', angle, );
                            console.log('go', go, 'pi', Math.PI / 4 * (index + 1 + go), 'index', index, 'bottom', bottom);
                            let w = 0, h = 0;
                            let display;
                            if (angle === 0) {
                                w = width * 0.05;
                                h = width * 0.05;
                            } if (angle === 45 || angle === 135) {
                                w = width / 72 * 7;
                                h = width / 72 * 7;
                                if (bottom === Math.sin(Math.PI / 4 * 5) * radius / 2 + radius / 2 || bottom === Math.sin(Math.PI / 4 * 7) * radius / 2 + radius / 2) {
                                    display = 'none';
                                }
                            } if (angle === 90) {
                                w = width / 24 * 5;
                                h = width / 24 * 5;
                                if (Math.round(bottom) === 0) {
                                    display = 'none';
                                }
                            }

                            return (
                                <div key={index}>
                                    <MainImage onMouseEnter={() => console.log(index)} display={display} width={w} height={h} bottom={bottom} left={left} angle={angle} src={element.src}></MainImage>
                                    <MainInfo size={width} left={radius / 1.45} bottom={0} style={angle === 90 && bottom !== 0 ? { opacity: '1', transition: 'all 1s', visibility: 'visible' } : { opacity: '0', transition: 'all 1s', visibility: 'hidden', }} >
                                        <Stack style={{ height: 'auto' }} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                            <Text style={{ color: '#0C265B', marginBottom: width * 0.01 + 'px' }} type='H1'>{angle === 90 && bottom !== 0 ? element.name : ''}</Text>
                                            <Text style={{ color: '#243C6C', marginBottom: width * 0.01 + 'px', textAlign: 'center' }} type='T2'>{angle === 90 && bottom !== 0 ? element.text : ''}</Text>
                                    <Program bottom={bottom} width={width} angle={angle} program={element.program}></Program>

                                        </Stack>
                                    </MainInfo>
                                </div>
                            );
                        })
                    }
                    <CarouselBtn left={Math.cos(Math.PI / 2) * radius + radius / 1.25} bottom={Math.sin(Math.PI / 2) * radius} width={width * 0.03} height={width * 0.03} onClick={Next}><CarouselBack style={{ height: width * 0.025 + 'px', width: width * 0.025 + 'px', }} /></CarouselBtn>

                    <CarouselBtn left={Math.cos(Math.PI / 2) * radius + radius * 1.7} bottom={Math.sin(Math.PI / 2) * radius} width={width * 0.03} height={width * 0.03} onClick={Prev}><CarouselNext style={{ height: width * 0.025 + 'px', width: width * 0.025 + 'px', }} /></CarouselBtn>
                </div>
            </Stack>
        </div>
    );
}

export default CircleCarousel
