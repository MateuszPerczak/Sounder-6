import StyledComboBox from "./ComboBox.styles";
import type { ComboBoxProps } from "./ComboBox.types";

const ComboBox = ({ options }: ComboBoxProps): JSX.Element => {
  return (
    <StyledComboBox>
      <button>Select option</button>
    </StyledComboBox>
  );
};

export default ComboBox;
