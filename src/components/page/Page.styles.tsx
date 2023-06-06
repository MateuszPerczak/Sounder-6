import styled from "@emotion/styled";

const StyledPage = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  .page-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 50px;
    border-bottom: 1px solid ${({ theme: { stroke } }): string => stroke};
    padding: 0 10px;
  }
  .toolbar-name {
    font-size: 20px;
    font-weight: 300;
  }
  .toolbar-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .page-content {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 10px 2px 10px 10px;
    animation: page-load 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
    will-change: opacity, transform;
  }
  @keyframes page-load {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export default StyledPage;
