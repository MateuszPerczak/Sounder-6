export interface ComboBoxProps {
  options: unknown[];
  selectedOption: unknown;
  disabled?: boolean;
  onChange: (option: unknown) => void;
}
