import type { PropsWithChildren } from "react";

import type { IconProps } from "../icon/Icon.types";

export type ExpanderProps = PropsWithChildren<
  {
    label?: string;
    description?: string;
    expanded?: boolean;
  } & IconProps
>;
