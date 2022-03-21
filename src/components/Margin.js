import _ from 'lodash';
import styled from 'styled-components';

export const Margin = styled.div`
  margin: ${({ size }) => {
    if (_.isArray(size)) {
      return size.reduce((acc, cur) => `${acc}${cur}px `, '');
    }
    return `${size}px`;
  }};
`;
