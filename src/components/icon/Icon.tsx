import { memo } from "react";

import StyledIcon from "./Icon.styles";
import type { IconProps } from "./Icon.types";

const Icon = ({ hex, ...rest }: IconProps): JSX.Element => {
  return <StyledIcon {...rest}>{hex}</StyledIcon>;
};

export default memo(Icon);
