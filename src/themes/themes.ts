import type { Theme } from "@emotion/react";

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fff",
    color: "#000",
    contrast: "#aaa",
    scrollbarThumb: "#bdbdbd",
    scrollbarThumbHover: "#aaa",
    nav: "#fff",
    border: "#bdbdbd",
    navButton: "#fff",
    navButtonSelected: "#f5f5f5",
    navSearch: "#fff",
    navSearchSelected: "#f5f5f5",
    navSearchSelection: "#bdbdbd",
  },
  dark: {
    background: "#212121",
    color: "#fff",
    contrast: "#111",
    scrollbarThumb: "#323232",
    scrollbarThumbHover: "#424242",
    nav: "#212121",
    border: "#323232",
    navButton: "#212121",
    navButtonSelected: "#323232",
    navSearch: "#212121",
    navSearchSelected: "#323232",
    navSearchSelection: "#000",
  },
};

export default themes;
