import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";

import useTheme from "@/hooks/useTheme";
import { router } from "@/routes/routes";

import GlobalStyle from "../globalStyle/GlobalStyle";

const AppProvider = (): JSX.Element => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default AppProvider;
