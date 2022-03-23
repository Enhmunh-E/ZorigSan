import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItems = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLinks = styled.div`
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default HeaderStyle;