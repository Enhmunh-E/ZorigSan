import styled from 'styled-components';

const Padding = styled.div`
  padding: ${({ size }) => {
    if (Array.isArray(size)) {
      return size.reduce((acc, cur) => `${acc}${cur}px `, '');
    }
    return `${size}px`;
  }};
`;

export { Padding };
