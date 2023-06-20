import { useState } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledComboBox from "./ComboBox.styles";
import type { ComboBoxProps } from "./ComboBox.types";

const ComboBox = ({ options, disabled }: ComboBoxProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = (): void => {
    !disabled && setIsOpen((wasOpen): boolean => !wasOpen);
  };

  return (
    <StyledComboBox>
      <button onClick={toggleIsOpen} disabled={disabled}>
        <span>Select option</span>
        <Icon icon={isOpen ? Icons.ChevronUp : Icons.ChevronDown} size={12} />
      </button>
      {isOpen && (
        <menu>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </menu>
      )}
    </StyledComboBox>
  );
};

export default ComboBox;
