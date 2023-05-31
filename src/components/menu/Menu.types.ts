import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  x: number;
  y: number;
}
