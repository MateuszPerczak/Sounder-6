import styled from "@emotion/styled";

import type { MenuProps } from "./Menu.types";

const StyledMenu = styled.menu<Pick<MenuProps, "x" | "y">>`
  position: fixed;
  /* top: ${({ y }): string => `min(${y}px, calc(100vh - 100%))`};
  left: ${({ x }): string => `min(${x}px, calc(100vw - 100%))`}; */
  top: ${({ y }): string => `${y}px`};
  left: ${({ x }): string => `${x}px`};
  overflow: hidden;
  .menu-content {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    background-color: ${({ theme: { background } }): string => background};
    border-radius: 4px;
    border: 1px solid ${({ theme: { border } }): string => border};
    overflow: hidden;
    transform: translateY(-100%);
    animation: slideIn 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
    will-change: transform;
  }
  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    font-size: 14px;
    transition: background-color 200ms;
    &:hover {
      background-color: ${({ theme: { navButtonSelected } }): string =>
        navButtonSelected};
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
