import styled from "@emotion/styled";

const StyledComboBox = styled.div`
  position: relative;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 35px;
    padding: 8px 10px;
    border-radius: 4px;
    outline: none;
    font-size: 12px;
    background-color: ${({ theme: { fill } }): string => fill};
    color: ${({ theme: { textPrimary } }): string => textPrimary};
    border: 1px solid ${({ theme: { stroke } }): string => stroke};
    transition: background-color 150ms, border 150ms, color 150ms;
  }
  button:disabled {
    color: ${({ theme: { textDisabled } }): string => textDisabled};
    background-color: ${({ theme: { fillDisabled } }): string => fillDisabled};
    border: 1px solid ${({ theme: { strokeDisabled } }): string => strokeDisabled};
  }
  button:hover:not([disabled]) {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
    border: 1px solid ${({ theme: { strokeHover } }): string => strokeHover};
  }
  button:active:not([disabled]) {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
    border: 1px solid ${({ theme: { strokeActive } }): string => strokeActive};
  }
  button:focus-visible {
    outline: 1px solid ${({ theme: { textPrimary } }): string => textPrimary};
  }
  menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background-color: ${({ theme: { fill } }): string => fill};
    border: 1px solid ${({ theme: { stroke } }): string => stroke};
    border-radius: 4px;
    z-index: 1;
  }
`;

export default StyledComboBox;
