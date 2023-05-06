import type { To } from "react-router-dom";

import { IconProps } from "@/components/icon/Icon.types";

export interface NavButtonProps extends IconProps {
  label: string;
  to: To;
  onClick?: () => void;
}
