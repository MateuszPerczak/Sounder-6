import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms;
  text-decoration: none;
  color: ${({ theme: { color } }): string => color};
  &:hover {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
  .button-label {
    padding-top: 2px;
    line-height: 10px;
  }
  &.active {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
`;

export default StyledNavButton;
