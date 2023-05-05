import styled from "@emotion/styled";

import { IconProps } from "./Icon.types";

const StyledIcon = styled.div<Omit<IconProps, "hex">>`
  font-family: "Segoe Fluent Icons";
  font-size: ${({ size }): string => `${size ?? 18}px`};
`;

export default StyledIcon;
