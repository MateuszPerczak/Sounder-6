import styled from "@emotion/styled";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { backgroundLayer } }): string => backgroundLayer};
  border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
  border-radius: 4px;
  font-size: 14px;
  .panel-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
  .panel-content {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;

export default StyledPanel;
