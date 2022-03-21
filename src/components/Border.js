import styled from 'styled-components';

export const Border = styled.div`
    ${(props) => props.width ? 'width: ' + props.width + 'px': 'width: auto'} ;
    ${(props) => props.height ? 'height: ' + props.height + 'px' : 'height: auto'} ;
    ${(props) => props.borderRadius ? 'border-radius: ' + props.borderRadius : ''};
    ${(props) => props.borderWidth ? 'border-width: ' + props.borderWidth : ''};
    ${(props) => props.borderColor ? 'border-color: ' + props.borderColor : ''};
    ${(props) => props.borderStyle ? 'border-style: ' + props.borderStyle : ''};

`
