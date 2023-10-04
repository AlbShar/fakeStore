import { StyledDivWrapper, StyledLabel, StyledInput } from "./input.Styled";
import ErrorMessage from "UI/errorMessage/errorMessage";

import type { TInput } from "types";

const Input = ({ name, placeholder, type, textError, register }: TInput) => {
  return (
    <StyledDivWrapper>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        type={type}
        {...register}
        autoComplete="on"
      />
      {textError ? <ErrorMessage> {textError} </ErrorMessage> : false}
    </StyledDivWrapper>
  );
};

export default Input;
