import { useState } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledCheckBox, { StyledLabel } from "./CheckBox.styles";
import type { CheckBoxProps } from "./CheckBox.types";

const CheckBox = ({ label, checked, disabled, onChange }: CheckBoxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleChecked = (): void => {
    !disabled &&
      setIsChecked((wasChecked) => {
        if (typeof onChange === "function") {
          onChange(!wasChecked);
        }
        return !wasChecked;
      });
  };

  return (
    <StyledCheckBox>
      <button onClick={toggleChecked} disabled={disabled}>
        {isChecked && <Icon icon={Icons.CheckMark} size={14} />}
      </button>
      {label && (
        <StyledLabel disabled={disabled} onClick={toggleChecked}>
          {label}
        </StyledLabel>
      )}
    </StyledCheckBox>
  );
};

export default CheckBox;
