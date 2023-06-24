export interface ComboBoxProps {
  options: ComboBoxOption[];
  selectedOption: ComboBoxOption["value"];
  width?: number;
  disabled?: boolean;
  onChange: (option: ComboBoxOption["value"]) => void;
}

export type ComboBoxOption = {
  name: string;
  value: string | number | boolean;
};
