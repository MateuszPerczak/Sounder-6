import "@emotion/react";

type Hex = `#${string}`;

declare module "@emotion/react" {
  export interface Theme {
    textPrimary: Hex;
    textSecondary: Hex;
    textDisabled: Hex;
    fill: Hex;
    fillHover: Hex;
    fillActive: Hex;
    fillDisabled: Hex;
    fillStrong: Hex;
    stroke: Hex;
    strokeHover: Hex;
    strokeActive: Hex;
    strokeDisabled: Hex;
    strokeStrong: Hex;
    background: Hex;
    smoke: Hex;
    // background: Hex;
    // color: Hex;
    // border: Hex;
    // contrast: Hex;
    // scrollbarThumb: Hex;
    // scrollbarThumbHover: Hex;
    // nav: Hex;
    // navButton: Hex;
    // navButtonSelected: Hex;
    // navSearch: Hex;
    // navSearchSelected: Hex;
    // navSearchSelection: Hex;
    // button: Hex;
    // buttonHover: Hex;
    // buttonDisabled: Hex;
  }
}
