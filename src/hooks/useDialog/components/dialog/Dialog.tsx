import { useLayoutEffect, useRef } from "react";

import Button from "../../../../components/button/Button";
import StyledDialog from "./Dialog.styles";
import type { DialogProps } from "./Dialog.types";

const Dialog = ({ title, show, children, buttons }: DialogProps): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (dialogRef.current === null) return;
    show ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [show]);

  return (
    <StyledDialog ref={dialogRef}>
      <div className="dialog-content">
        {title && <h1>{title}</h1>}
        {children}
      </div>
      <div className="dialog-footer">
        {buttons &&
          buttons.map((button, index) => (
            <Button {...button} key={`modal-button-${index}`} />
          ))}
      </div>
    </StyledDialog>
  );
};

export default Dialog;
