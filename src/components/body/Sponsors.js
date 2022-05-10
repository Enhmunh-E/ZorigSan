import React, { useMemo } from "react";
import styled from 'styled-components';
import { Stack, Text } from "../core";
import useWindowDimensions from '../../functions/useWindowDimensions';


const Wrapper = styled.div`
    width: 100vw;
    
    @media only screen and (min-width: 540px) {
        height: 40vw;
        gap: 23vh;
      }@media only screen and (max-width: 540px) {
        height: 90vh;
        gap: 0;
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
                <Stack style={{ marginTop: '-100px', width: '80vw' }} flexDirection='row' justifyContent='space-around'>
                    {elements.map((element, index) => {
                        return <img style={{ border: '#0C265B 1px solid', borderRadius: '50%', height: '15vw', width: '15vw' }} src={element.image.file.url} key={index} />
                    })}
                </Stack> : <Stack style={{ width: '80vw' }} flexDirection='column' alignItems='center'>
                    {elements.map((element, index) => {
                        return <img style={{ border: '#0C265B 1px solid', borderRadius: '50%', height: '40vw', marginTop: "1vw", width: '40vw' }} src={element.image.file.url} key={index} />
                    })}
                </Stack>}

        </Wrapper>
    );
};