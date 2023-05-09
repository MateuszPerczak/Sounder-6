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
    navButton: Hex;
    navButtonSelected: Hex;
    navSearch: Hex;
    navSearchSelected: Hex;
    navSearchSelection: Hex;
  }
}
