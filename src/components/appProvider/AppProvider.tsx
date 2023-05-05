import { ThemeProvider } from "@emotion/react";

import useTheme from "@/hooks/useTheme";

import App from "../app/App";
import GlobalStyle from "../globalStyle/GlobalStyle";

const AppProvider = (): JSX.Element => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
