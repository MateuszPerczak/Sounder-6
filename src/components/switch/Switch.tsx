import { useState } from "react";

import StyledSwitch, { StyledSwitchBall } from "./Switch.styles";
import type { SwitchProps } from "./Switch.types";

const Switch = ({ disabled, switched }: SwitchProps): JSX.Element => {
  const [isSwitched, setIsSwitched] = useState(switched ?? false);

  const toggleSwitch = (): void => {
    !disabled && setIsSwitched(!isSwitched);
  };

  return (
    <StyledSwitch onClick={toggleSwitch} disabled={disabled} isSwitched={isSwitched}>
      <StyledSwitchBall
        layout
        transition={{ type: "tween", duration: 0.2, ease: [0.2, 0.7, 0, 0.99] }}
      />
    </StyledSwitch>
  );
};

export default Switch;
