import _ from "lodash";
import styled from "styled-components";

const Image = styled.img`
    width:${props => props.width ? props.width+'px' : ''};
    height:${props => props.height ? props.height+'px' : ''};
    border-radius: ${props => props.borderRadius ? props.borderRadius+'px' : ''};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
`;


export { Image };
