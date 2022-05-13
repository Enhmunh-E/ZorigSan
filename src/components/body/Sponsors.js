import React, { useMemo } from "react";
import styled from 'styled-components';
import { Stack, Text } from "../core";
import useWindowDimensions from '../../functions/useWindowDimensions';


const Wrapper = styled.div`
    width: 100vw;
    
    @media only screen and (min-width: 540px) {
        height: 40vh;
        gap: 23vh;
      }@media only screen and (max-width: 540px) {
        height: 550px;
        gap: 10%;
      }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
`

export const Sponsors = ({ arr }) => {
    const { width } = useWindowDimensions();

    const elements = useMemo(() => {
        return arr.slice(0, 3);
    }, [arr]);
    return (
        <Wrapper>
            <Text style={{ color: '#0C265B', textAlign: 'center' }} type='T0'> Хамтрагч байгууллагууд</Text>
            {width > 540 ?
                <Stack style={{ marginTop: '-200px', width: '80vw' }} flexDirection='row' justifyContent='space-around'>
                    {elements.map((element, index) => {
                        return <img style={{ borderRadius: '50%', height: '15vw', width: '15vw' }} src={element.image.file.url} key={index} />
                    })}
                </Stack> : <Stack style={{ width: '80vw' }} gap={'50px'} flexDirection='column' alignItems='center'>
                    {elements.map((element, index) => {
                        return <img style={{ borderRadius: '50%', height: '21vw', marginTop: "1vw", width: '21vw' }} src={element.image.file.url} key={index} />
                    })}
                </Stack>}

        </Wrapper>
    );
};