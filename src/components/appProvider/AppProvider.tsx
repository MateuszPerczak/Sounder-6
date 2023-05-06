import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";

import useTheme from "@/hooks/useTheme";

import GlobalStyle from "../globalStyle/GlobalStyle";

const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
