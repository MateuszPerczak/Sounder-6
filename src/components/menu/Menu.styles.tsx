import styled from "@emotion/styled";

import type { MenuProps } from "./Menu.types";

const StyledMenu = styled.menu<Pick<MenuProps, "x" | "y">>`
  position: fixed;
  top: min(${({ y }): string => `${y}px`}, calc(100vh - 134px));
  left: min(${({ x }): string => `${x}px`}, calc(100vw - 110px));

  /* top: ${({ y }): string => `min(${y}px, calc(100vh - 100px))`};
  left: ${({ x }): string => `min(${x}px, calc(100vw - 100px))`}; */
  /* top: ${({ y }): string => `${y}px`};
  left: ${({ x }): string => `${x}px`}; */
  overflow: hidden;
  z-index: 10;
  .menu-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    background-color: ${({ theme: { background } }): string => background};
    border-radius: 4px;
    border: 1px solid ${({ theme: { stroke } }): string => stroke};
    overflow: hidden;
    transform: translateY(-100%);
    animation: slideIn 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
    will-change: transform;
  }
  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    flex: 0 0 35px;
    font-size: 14px;
    border-radius: 4px;
    transition: background-color 150ms;
    &:hover {
      background-color: ${({ theme: { fillHover } }): string => fillHover};
    }
    &:active {
      background-color: ${({ theme: { fillActive } }): string => fillActive};
    }
    @keyframes slideIn {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
`;

export default StyledMenu;
