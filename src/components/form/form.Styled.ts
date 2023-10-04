import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  background-color: white;
  border-radius: 7px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  width: 90%;
  max-width: 500px;
  padding: 20px;
`;

export const StyledSpan = styled.span`
  position: absolute;
  display: inline-block;
  top: 5px;
  right: 15px;
  width: 15px;
  height: 15px;
  color: black;
  cursor: pointer;
`;

export const StyleDivWrapper = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`;

export const StyledH2 = styled.h2`
  margin: 0 0 22px 0;
  textalign: center;
`;
