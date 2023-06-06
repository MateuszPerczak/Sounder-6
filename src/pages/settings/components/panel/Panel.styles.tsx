import styled from "@emotion/styled";

const StyledPanel = styled.div`
  display: flex;
  flex: 0 0 100px;
  background-color: ${({ theme: { backgroundLayer } }): string => backgroundLayer};
  border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
  border-radius: 4px;
`;

export default StyledPanel;
