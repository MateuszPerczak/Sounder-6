import styled from "@emotion/styled";

const StyledExpander = styled.div`
  display: flex;
  flex-direction: column;
  .expander-header-children {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .expander-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 50px;
    z-index: 1;
    background-color: ${({ theme: { backgroundLayer } }): string => backgroundLayer};
    border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
    border-top: none;
    border-radius: 0 0 4px 4px;
    animation: expander-load 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
  }
  .expander-content > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
  }
  .header-children {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 15px;
  }
  .header-labels {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .header-description {
    font-size: 10px;
    color: ${({ theme: { textSecondary } }): string => textSecondary};
  }
  @keyframes expander-load {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const StyledExpanderHeader = styled.button<{ isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex: 0 0 50px;
  padding: 10px 15px;
  z-index: 2;
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  background-color: ${({ theme: { backgroundLayer } }): string => backgroundLayer};
  border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
  border-radius: ${({ isExpanded }): string => (isExpanded ? "4px 4px 0 0" : "4px")};
  transition: background-color 150ms;
  &:hover {
    background-color: ${({ theme: { backgroundHover } }): string => backgroundHover};
  }
  &:active {
    background-color: ${({ theme: { backgroundActive } }): string => backgroundActive};
  }
`;

export default StyledExpander;
