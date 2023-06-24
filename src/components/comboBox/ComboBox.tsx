import { useEffect, useRef, useState } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledComboBox from "./ComboBox.styles";
import type { ComboBoxOption, ComboBoxProps } from "./ComboBox.types";

const ComboBox = ({ options, disabled, width, onChange }: ComboBoxProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<ComboBoxOption | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleIsOpen = (): void => {
    !disabled && setIsOpen((wasOpen): boolean => !wasOpen);
  };

  const selectOption = (option: ComboBoxOption): void => {
    setIsOpen(false);
    setSelectedOption(option);
    typeof onChange === "function" && onChange(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node) &&
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <StyledComboBox ref={ref} width={width}>
      <button onClick={toggleIsOpen} disabled={disabled} className="combobox-button">
        <span>{selectedOption?.name ?? "Select option"}</span>
        <Icon icon={isOpen ? Icons.ChevronUp : Icons.ChevronDown} size={12} />
      </button>
      {isOpen && (
        <menu>
          {options.map((option, index) => (
            <button
              className="menu-item"
              key={`combo-option-${index}`}
              onClick={(): void => selectOption(option)}
            >
              {option.name}
            </button>
          ))}
        </menu>
      )}
    </StyledComboBox>
  );
};

export default ComboBox;
