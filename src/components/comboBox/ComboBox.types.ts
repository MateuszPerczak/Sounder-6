export interface ComboBoxProps {
  options: ComboBoxOption[];
  selectedOption: ComboBoxOption["value"];
  disabled?: boolean;
  onChange: (option: ComboBoxOption) => void;
}

export type ComboBoxOption = {
  name: string;
  value: string | number | boolean;
};
