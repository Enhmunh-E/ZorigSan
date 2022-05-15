import React, { useMemo } from "react";
import styled from 'styled-components';
import { Stack, Text } from "../core";
import useWindowDimensions from '../../functions/useWindowDimensions';
import { motion, useAnimation } from "framer-motion";


const Wrapper = styled.div`
    width: 100vw;
    
    @media only screen and (min-width: 540px) {
        height:55vh;
        gap: 23vh;
      }@media only screen and (max-width: 540px) {
        height: 650px;
        gap: 10%;
      }@media only screen and (max-width: 400px) {
        height: 500px;
        gap: 10%;
      }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
`

const Box = ({ children, id, onMobile }) => {
    const boxVariants = {
        offscreen: {
            opacity: '0',
            x: 200,
            y:-50
        },
        onscreen: {
            opacity: '1',
            transition: {
                bounce: 0.4,
                delay: id * 0.1,
                duration: 0.8,
                type: "spring",
            },
            x: 0,
            y:-50
        }
    };
    const boxVariants1 = {
        offscreen: {
            opacity: '0',
            x: -100,
            y:-50
        },
        onscreen: {
            opacity: '1',
            transition: {
                delay: id * 0.1,
                duration: 0.8,
                type: "spring",
            },
            x: 0,
            y:-50
        }
    };
    const control = useAnimation();
    return (
        <motion.div
            className="box"
            variants={id % 2 === 0 && onMobile ?  boxVariants1 : boxVariants}
            initial="offscreen"
            animate={control}
            viewport={{ once: true }}
            whileInView='onscreen'
        >
            <h1>{children} </h1>
        </motion.div>
    );
};

export const Sponsors = ({ arr }) => {
    const { width } = useWindowDimensions();

    const elements = useMemo(() => {
        return arr.slice(0, 3);
    }, [arr]);
    return (
        <Wrapper>
            <Text style={{color: '#0C265B',marginTop: '10%',  textAlign: 'center' }} type='T0'> Хамтрагч байгууллагууд</Text>
            {width > 540 ?
                <Stack style={{ marginTop: '-100px', width: '80vw' }} flexDirection='row' justifyContent='space-around'>
                    {elements.map((element, index) => {
                        return <Box key={index} id={index}>
                            <img style={{ borderRadius: '50%', height: '15vw', width: '15vw' }} src={element.image.file.url} />
                        </Box>
                    })}
                </Stack> : <Stack style={{ width: '80vw' }} gap={'10px'} flexDirection='column' alignItems='center'>
                    {elements.map((element, index) => {
                        return <Box key={index} id={index} onMobile={true}>
                            <   img style={{ borderRadius: '50%', height: '21vw', marginTop: "1vw", width: '21vw' }} src={element.image.file.url} key={index} />
                            </Box>
                    })}
                </Stack>}

        </Wrapper>
    );
};