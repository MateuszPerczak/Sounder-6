import styled from "@emotion/styled";

const StyledControls = styled.footer`
  display: flex;
  flex: 0 0 90px;
  border-top: 1px solid ${({ theme: { stroke } }): string => stroke};
  background-color: ${({ theme: { backgroundStrong } }): string => backgroundStrong};
`;

export default StyledControls;
