import styled from "@emotion/styled";

const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 300;
  button {
    display: grid;
    place-items: center;
    width: 22px;
    aspect-ratio: 1;
    color: ${({ theme: { textPrimary } }): string => textPrimary};
    border: 1px solid ${({ theme: { stroke } }): string => stroke};
    background-color: ${({ theme: { fill } }): string => fill};
    transition: background-color 150ms, border 150ms;
    border-radius: 4px;
    &:disabled {
      color: ${({ theme: { textDisabled } }): string => textDisabled};
      background-color: ${({ theme: { fillDisabled } }): string => fillDisabled};
      border: 1px solid ${({ theme: { strokeDisabled } }): string => strokeDisabled};
    }
    &:hover:not([disabled]) {
      background-color: ${({ theme: { fillHover } }): string => fillHover};
      border: 1px solid ${({ theme: { strokeHover } }): string => strokeHover};
    }
    &:active:not([disabled]) {
      background-color: ${({ theme: { fillActive } }): string => fillActive};
      border: 1px solid ${({ theme: { strokeActive } }): string => strokeActive};
    }
    &:focus-visible {
      outline: 1px solid ${({ theme: { textPrimary } }): string => textPrimary};
    }
  }
`;

export const StyledLabel = styled.span<{ disabled?: boolean }>`
  color: ${({ theme: { textPrimary, textDisabled }, disabled }): string =>
    disabled ? textDisabled : textPrimary};
`;

export default StyledCheckBox;
