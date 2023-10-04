import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 0 0 30px;
  border: 1px solid #6768d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
`;

export const StyledInput = styled.input`
  position: relative;
  box-sizing: border-box;
  width: 320px;
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

export const StyledSelect = styled.select`
  position: relative;
  box-sizing: border-box;
  width: 320px;
  height: 60px;
  border: 1px solid #81868c80;
  border-radius: 5px;
  padding: 16px 19px;
  outline: none;
`;

export const StyledOption = styled.option`
  color: #81868c;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 16px;
  z-index: 2;
  background-color: white;
  color: #81868c;
`;

export const StyledPError = styled.p`
  color: red;
`;

export const StyledDivWrapper = styled.div`
  position: relative;
  margin: 0 0 10px 0;
`;

export const StyledButton = styled.button`
  padding: 8px 23px;
  background-color: #585aff;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 7px;
  color: white;

  &:disabled {
    opacity: 0.5;
  }

  @media screen and (min-width: 767.8px) {
    padding: 12px 60px;
  }
`;
