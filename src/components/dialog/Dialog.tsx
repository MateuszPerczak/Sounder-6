import { useEffect, useLayoutEffect, useRef } from "react";

import Button from "../button/Button";
import { Icons } from "../icon/Icon.types";
import StyledDialog from "./Dialog.styles";
import type { DialogProps } from "./Dialog.types";

const Dialog = ({ show, children }: DialogProps): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (dialogRef.current === null) return;
    show ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [show]);

  return (
    <StyledDialog ref={dialogRef}>
      <div className="dialog-content">{children}</div>
      <div className="dialog-footer">
        <Button icon={Icons.Audio} />
        <Button icon={Icons.Certificate} />
      </div>
    </StyledDialog>
  );
};

export default Dialog;
