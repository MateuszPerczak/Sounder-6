import styled from "@emotion/styled";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  aspect-ratio: 1;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  transition: background-color 150ms, border 150ms, color 150ms;
  &:disabled {
    color: ${({ theme: { textDisabled } }): string => textDisabled};
  }
  &:hover:not([disabled]) {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
  }
  &:active:not([disabled]) {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { textPrimary } }): string => textPrimary};
  }
`;

export default Button;
