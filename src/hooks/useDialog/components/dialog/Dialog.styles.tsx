import styled from "@emotion/styled";

const StyledDialog = styled.dialog`
  &:modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: 300px;
    height: 200px;
    color: ${({ theme: { textPrimary } }): string => textPrimary};
    border: 1px solid ${({ theme: { stroke } }): string => stroke};
    background-color: ${({ theme: { background } }): string => background};
    animation: dialog-show 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
    will-change: opacity, transform;
  }
  &::backdrop {
    animation: dialog-background 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
  }
  .dialog-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    flex: 1;
    font-size: 14px;
    h1 {
      font-size: 18px;
    }
  }
  .dialog-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 60px;
    gap: 10px;
    padding: 10px;
    border-top: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
    background-color: ${({ theme: { backgroundSecondary } }): string =>
      backgroundSecondary};
  }

  @keyframes dialog-background {
    from {
      background-color: ${({ theme: { smoke } }): string => `${smoke}00`};
    }
    to {
      background-color: ${({ theme: { smoke } }): string => `${smoke}88`};
    }
  }
  @keyframes dialog-show {
    from {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;

export default StyledDialog;
// const Dialog = styled.dialog`
//   &:modal {
//     position: fixed;
//     display: grid;
//     place-items: center;
//     font-size: 60px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 300px;
//     height: 200px;
//     outline: none;
//     border-radius: 4px;
//     background-color: ${({ theme: { fill } }): string => fill};
//     border: 1px solid ${({ theme: { stroke } }): string => stroke};
//     color: ${({ theme: { textPrimary } }): string => textPrimary};
//     animation: dialog-load 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
//   }

//   &::backdrop {
//     animation: backdrop-load 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
//     @keyframes backdrop-load {
//       from {
//         background-color: ${({ theme: { smoke } }): string => `${smoke}00`};
//       }
//       to {
//         background-color: ${({ theme: { smoke } }): string => `${smoke}88`};
//       }
//     }
//   }
//   @keyframes dialog-load {
//     from {
//       transform: translate(-50%, -60%);
//     }
//     to {
//       transform: translate(-50%, -50%);
//     }
//   }
// `;
