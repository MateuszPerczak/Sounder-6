import styled from "@emotion/styled";

import type { NavButtonProps } from "./NavButton.types";

const StyledNavButton = styled.div<Pick<NavButtonProps, "selected">>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms;
  color: ${({ theme: { color } }): string => color};
  background-color: ${({ theme: { navButton, navButtonSelected }, selected }): string =>
    selected ? navButtonSelected : navButton};
  .button-label {
    font-weight: 400;
    font-size: 12px;
  }
  &:hover {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
`;

export default StyledNavButton;
