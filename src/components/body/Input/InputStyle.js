import styled from "styled-components";

export const InputCon = styled.div`
  width: ${(props) => (props.width ? props.width : "320px")};
`;
export const InputStyle = styled.div`
  width: ${(props) =>
    props.width ? `${props.width - 34}px` : "calc(100% - 34px)"};
  height: 46px;
  padding: 0;
  border: 1px solid #fff;
  border-color: ${(props) => (props.border ? props.border : "#fff")};
  border-radius: 4px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.BackgroundColor ? props.BackgroundColor : ""};
`;
export const MainInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin-left: ${(props) => (props.search ? "10px" : 0)};
  margin-right: ${(props) => (props.arrow ? "10px" : 0)};
`;
export const InputIcon = styled.img`
  height: ${(props) => (props.arrow ? "16px" : "18px")};
`;
export const Label = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const InputHintOptional = styled.div`
  color: #6b7280;
  font-size: 12px;
`;
export const InputOptionalCon = styled.div`
  display: flex;
  align-items: center;
  gap: 4.37px;
  margin-top: 8px;
`;
export const InputLabel = styled.div`
  font-size: 14px;
`;
export const InputSendButton = styled.button`
  border: none;
  padding: 0;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
