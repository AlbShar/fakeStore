import {
  StyledDivWrapper,
  StyledLabel,
  StyledSelect,
  StyledOption,
} from "./select.Styled";
import ErrorMessage from "UI/errorMessage/errorMessage";
import type { TInput, TCategories } from "types";

type TSelectProps = Omit<TInput, "type" | "placeholder"> & TCategories;

const Select = ({ name, textError, register, categories }: TSelectProps) => {
  return (
    <StyledDivWrapper>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledSelect {...register}>
        <StyledOption disabled>Выберите категорию</StyledOption>
        {categories &&
          categories.map((category: string, index: number) => (
            <StyledOption key={index} value={category}>
              {category}
            </StyledOption>
          ))}
      </StyledSelect>
      {textError ? <ErrorMessage> {textError} </ErrorMessage> : false}
    </StyledDivWrapper>
  );
};

export default Select;
