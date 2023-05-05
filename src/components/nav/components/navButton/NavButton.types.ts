import { IconProps } from "@/components/icon/Icon.types";

export interface NavButtonProps extends IconProps {
  label: string;
  onClick?: () => void;
}
