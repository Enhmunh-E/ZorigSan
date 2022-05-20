import styled from "styled-components";
import { Stack } from "../../core";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
export const Block = styled.div`
  width: 100vw;
  height: 133px;
`;
export const Con = styled(Stack)`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};

  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
`;

export const Flex = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
  padding-bottom: ${(props) =>
    props.PaddingBottom ? props.PaddingBottom : ""};
  padding-left: ${(props) => (props.PaddingLeft ? props.PaddingLeft : "")};
  padding-right: ${(props) => (props.PaddingRight ? props.PaddingRight : "")};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
`;
export const BlueText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.001em;
  color: #4fade0;
  font-family: "Montserrat";
  text-align: center;
`;
export const BigText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => (props.FontSize ? props.FontSize : "")};
  line-height: 49px;
  text-transform: uppercase;
  font-feature-settings: "case" on;
  color: ${(props) => (props.color ? props.color : "#0c265c")};
  display: flex;
  justify-content: center;
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
  text-align: center;
`;
export const SmallText = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  opacity: 0.6;
  text-align: ${(props) => (props.TextAlign ? props.TextAlign : "normal")};
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
`;
export const TitleSmallText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  opacity: 0.6;
  text-align: ${(props) => (props.TextAlign ? props.TextAlign : "normal")};
  padding-top: ${(props) => (props.PaddingTop ? props.PaddingTop : "")};
`;