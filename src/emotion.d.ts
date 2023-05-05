import "@emotion/react";

type Hex = `#${string}`;

declare module "@emotion/react" {
  export interface Theme {
    background: Hex;
    color: Hex;
    scrollbarThumb: Hex;
    scrollbarThumbHover: Hex;
    nav: Hex;
    navBorder: Hex;
    navButtonSelected: Hex;
  }
}
