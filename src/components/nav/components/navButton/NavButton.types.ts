import type { IconProps } from "@/components/icon/Icon.types";

export interface NavButtonProps extends IconProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}
