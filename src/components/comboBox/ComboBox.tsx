import { useEffect, useRef, useState } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledComboBox from "./ComboBox.styles";
import type { ComboBoxOption, ComboBoxProps } from "./ComboBox.types";

const ComboBox = ({
  options,
  selectedOption,
  disabled,
  width,
  onChange,
}: ComboBoxProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [internalSelectedOption, setInternalSelectedOption] =
    useState<ComboBoxOption | null>(
      () => options.find((option) => option.value === selectedOption) ?? null,
    );
  const ref = useRef<HTMLDivElement>(null);

  const toggleIsOpen = (): void => {
    !disabled && setIsOpen((wasOpen): boolean => !wasOpen);
  };

  const selectOption = (option: ComboBoxOption): void => {
    setIsOpen(false);
    setInternalSelectedOption(option);
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
  }, []);

  return (
    <StyledComboBox ref={ref} width={width}>
      <button onClick={toggleIsOpen} disabled={disabled} className="combobox-button">
        <span>{internalSelectedOption?.name ?? "Select option"}</span>
        <Icon icon={isOpen ? Icons.ChevronUp : Icons.ChevronDown} size={12} />
      </button>
      {isOpen && (
        <menu>
          <div className="menu-items-wrapper">
            {options.map((option, index) => (
              <button
                className="menu-item"
                key={`combo-option-${index}`}
                onClick={(): void => selectOption(option)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </menu>
      )}
    </StyledComboBox>
  );
};

export default ComboBox;
