import type { PropsWithChildren } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

export type PanelProps = PropsWithChildren<
  {
    title: string;
  } & IconProps
>;
