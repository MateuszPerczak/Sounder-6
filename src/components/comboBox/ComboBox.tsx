import { useEffect, useRef, useState } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledComboBox from "./ComboBox.styles";
import type { ComboBoxOption, ComboBoxProps } from "./ComboBox.types";

const ComboBox = ({ options, disabled }: ComboBoxProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  const toggleIsOpen = (): void => {
    !disabled && setIsOpen((wasOpen): boolean => !wasOpen);
  };

  const selectOption = (option: ComboBoxOption): void => {
    setIsOpen(false);
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
    <StyledComboBox ref={ref}>
      <button onClick={toggleIsOpen} disabled={disabled}>
        <span>Select option</span>
        <Icon icon={isOpen ? Icons.ChevronUp : Icons.ChevronDown} size={12} />
      </button>
      {isOpen && (
        <menu>
          <button className="menu-item">1</button>
          <button className="menu-item">2</button>
          <button className="menu-item">3</button>
          <button className="menu-item">4</button>
        </menu>
      )}
    </StyledComboBox>
  );
};

export default ComboBox;
