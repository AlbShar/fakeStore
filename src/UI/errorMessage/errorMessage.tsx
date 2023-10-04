import ErrorIcon from "@mui/icons-material/Error";

import { StyledSpan, StyledP } from "./errorMesage.Styled";

type TErrorMessageProps = {
  children?: string[] | string;
};

const ErrorMessage = ({ children }: TErrorMessageProps) => {
  return (
    <StyledP>
      <ErrorIcon color="error" fontSize="medium" />
      <StyledSpan>{children || "Ошибка"}</StyledSpan>
    </StyledP>
  );
};

export default ErrorMessage;
