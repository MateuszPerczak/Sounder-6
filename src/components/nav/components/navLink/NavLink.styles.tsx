import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  transition: background-color 200ms;
  color: ${({ theme: { color } }): string => color};
  background-color: ${({ theme: { navButton } }): string => navButton};
  text-decoration: none;
  -webkit-user-drag: none;
  .button-label {
    font-weight: 400;
    font-size: 12px;
  }
  &.active {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
  &:hover {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
`;

export default StyledNavLink;
