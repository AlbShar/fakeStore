import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
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
    color: red;
  }

  @media screen and (min-width: 767.8px) {
    padding: 15px 30px;
  }
`;
