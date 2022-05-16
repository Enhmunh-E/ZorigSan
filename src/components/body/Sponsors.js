import React, { useMemo } from "react";
import styled from 'styled-components';
import { Stack, Text } from "../core";
import useWindowDimensions from '../../functions/useWindowDimensions';
import { motion, useAnimation } from "framer-motion";


const Wrapper = styled.div`
    width: 100vw;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
`

const Box = ({ children, id }) => {
    const boxVariants = {
        offscreen: {
            scale: '0',
            y:-45
        },
        onscreen: {
            scale: '1',
            transition: {
                bounce: 0.7,
                delay: id * 0.05,
                duration: 0.8,
                type: "spring",
            },
            y:-50
        }
    };

    const control = useAnimation();
    return (
        <motion.div
            className="box"
            variants={boxVariants}
            initial="offscreen"
            animate={control}
            whileInView='onscreen'
        >
            <h1>{children} </h1>
        </motion.div>
    );
};

export const Sponsors = ({ arr }) => {
    const { width } = useWindowDimensions();

    const elements = useMemo(() => {
        return arr;
    }, [arr]);
    return (
        <Wrapper>
            <Text style={{color: '#0C265B',marginTop: width > 1000 ? '5%' : '20%', textAlign: 'center' }} type='T0'> Хамтрагч байгууллагууд</Text>
                <Stack style={{alignItems: 'center' ,display: 'flex', flexWrap: 'wrap', marginTop: '100px', width: '65vw' }} flexDirection='row' justifyContent='space-around'>
                    {elements.map((element, index) => {
                        return <Box key={index} id={index}>
                            <img style={{height: 'auto', width: width > 540 ? '200px' : '150px'}} src={element.image.file.url} />
                        </Box>
                    })}
                </Stack> 

        </Wrapper>
    );
};