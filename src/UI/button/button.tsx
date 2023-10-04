import { CSSProperties, ReactElement } from "react";
import { StyledButton } from "UI/button/button.Styled";

type TButtonProps = {
  children: string | string[] | ReactElement;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
};

const Button = ({ children, disabled, onClick, style }: TButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
