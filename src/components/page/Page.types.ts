import type { ReactNode } from "react";

import type { IconProps } from "../icon/Icon.types";

export interface PageProps {
  name: string;
  toolbar?: ReactNode;
  content: ReactNode;
}
