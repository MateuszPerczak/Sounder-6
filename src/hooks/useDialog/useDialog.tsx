import { useState } from "react";

import { Icons } from "@/components/icon/Icon.types";
import Dialog from "@/hooks/useDialog/components/dialog/Dialog";

import type { UseDialogConfig } from "./useDialog.types";

const useDialog = (
  dialogConfig: UseDialogConfig,
): {
  dialog: JSX.Element;
  showDialog: () => void;
} => {
  const [show, setShow] = useState<boolean>(false);

  const showDialog = (): void => {
    setShow(true);
  };

  return {
    dialog: (
      <Dialog
        show={show}
        title="Restore defaults settings?"
        buttons={[
          { icon: Icons.Save, label: "Restore settings" },
          { icon: Icons.Cancel, label: "Cancel", onClick: () => setShow(false) },
        ]}
      >
        <p>Would u like to restore default settings?</p>
        <span>This cannot be undone!</span>
      </Dialog>
    ),
    showDialog,
  };
};

export default useDialog;
