import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 0 0 210px;
  gap: 10px;
  padding: 10px;
  border-right: 1px solid ${({ theme: { navBorder } }): string => navBorder};
  .nav-spacer {
    flex: 1;
  }
`;

export default StyledNav;
