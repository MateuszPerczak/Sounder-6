import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 100%;
  border-right: 1px solid ${({ theme: { border } }): string => border};

  .nav-label {
    font-size: 12px;
    padding: 10px;
  }
  .nav-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;

export default StyledNav;
