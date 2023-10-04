import styled from "styled-components";

export const StyledInput = styled.input`
  position: relative;
  box-sizing: border-box;
  width: 280px;
  height: 60px;
  font-size: 14px;
  line-height: 24px;

  border: 1px solid #81868c80;
  border-radius: 5px;
  padding: 16px 19px;
  outline: none;

  &:focus {
    border: 1px solid #6768d7;
    transition: all ease 0.3s;
  }

  &::placeholder {
    color: #81868c;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: -12px;
  left: 16px;
  z-index: 2;
  color: #81868c;
  background-color: white;
`;

export const StyledDivWrapper = styled.div`
  position: relative;
  margin: 0 0 20px 0;
`;
