import { css, Global, type Theme, useTheme } from "@emotion/react";
import { memo } from "react";

const GlobalStyle = (): JSX.Element => {
  const { background, color, scrollbarThumbHover, scrollbarThumb }: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Outfit", sans-serif;
          /* outline: 1px solid #0bd871aa; */
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
        }
        body {
          display: flex;
          flex-direction: column;
          background: ${background};
          color: ${color};
          overflow-y: scroll;
          overflow-x: hidden;
          user-select: none;
        }
        #root {
          display: flex;
          flex: 1;
        }
        ::-webkit-scrollbar {
          width: 14px;
        }
        ::-webkit-scrollbar-thumb {
          border: 4px solid transparent;
          background-color: ${scrollbarThumb};
          background-clip: padding-box;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${scrollbarThumbHover};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
