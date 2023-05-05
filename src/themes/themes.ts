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
    scrollbarThumb: "#bdbdbd",
    scrollbarThumbHover: "#f5f5f5",
    nav: "#fff",
    navBorder: "#bdbdbd",
    navButtonSelected: "#f5f5f5",
  },
  dark: {
    background: "#212121",
    color: "#fff",
    scrollbarThumb: "#323232",
    scrollbarThumbHover: "#424242",
    nav: "#212121",
    navBorder: "#3b3b3b",
    navButtonSelected: "#323232",
  },
};

export default themes;
