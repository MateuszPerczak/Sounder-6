import styled from "@emotion/styled";

const StyledControls = styled.footer`
  display: flex;
  flex: 0 0 90px;
  border-top: 1px solid ${({ theme: { border } }): string => border};
  background-color: ${({ theme: { contrast } }): string => contrast};
`;

export default StyledControls;
