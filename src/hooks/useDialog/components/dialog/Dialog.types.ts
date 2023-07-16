import type { PropsWithChildren } from "react";

import type { ButtonProps } from "../../../../components/button/Button.types";

export type DialogProps = {
  title?: string;
  show: boolean;
  buttons?: ButtonProps[];
} & PropsWithChildren;
