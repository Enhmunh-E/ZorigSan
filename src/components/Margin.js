import _ from "lodash";
import styled from "styled-components";

const Margin = styled.div`
  margin: ${({ size }) => {
    if (_.isArray(size)) {
      return size.reduce((acc, cur) => {
          return acc + `${cur}px `
      }, "")
    } else {
      return `${size}px`;
    }
  }};
`;

export { Margin };