import styled from 'styled-components';

export const Opacity = styled.div`
    ${(props) => (props.opacity ? `opacity: ${props.opacity} ` : 'opacity: 1')}
`;
