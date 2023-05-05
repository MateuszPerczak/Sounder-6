import styled from "@emotion/styled";

const StyledNavButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
`;

export default StyledNavButton;
