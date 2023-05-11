import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 100%;
  gap: 10px;
  padding: 10px;
  border-right: 1px solid ${({ theme: { navBorder } }): string => navBorder};
  .nav-label {
    font-size: 12px;
    padding: 10px;
  }
`;

export default StyledNav;
