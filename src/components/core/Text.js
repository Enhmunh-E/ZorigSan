import styled from "styled-components";
import "../../styles/textStyle.css";
import { FontSizes, FontWeight } from "./FontSizes";

export const Text = styled.div`
  @media (min-width: 961px) {
    font-size: ${({ type }) => FontSizes.onDesktop[type]};
    font-weight: ${({ type }) => FontWeight.onDesktop[type]};
  }
  @media (max-width: 960px) {
    font-size: ${({ type }) => FontSizes.onTablet[type]};
    font-weight: ${({ type }) => FontWeight.onTablet[type]};
  }
  @media (max-width: 540px) {
    font-size: ${({ type }) => FontSizes.onMobile[type]};
    font-weight: ${({ type }) => FontWeight.onMobile[type]};
  }
  font-family: Montserrat;
  color: ${({ color }) => color && color};
`;
export default Text;

// <Text type='./FontSizes dotor baigaa  --> Jishee ni H1Bold'  color='#0293933'> Blah blahjasdad </Text>
