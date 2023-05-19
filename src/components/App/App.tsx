import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";

import Store from "@/contexts/store/Store";
import { useStore } from "@/hooks/useStore/useStore";
import useTheme from "@/hooks/useTheme/useTheme";
import { router } from "@/routes/routes";

import GlobalStyle from "../globalStyle/GlobalStyle";

const App = (): JSX.Element => {
  const theme = useTheme();
  const { store, setStore } = useStore();
  return (
    <ThemeProvider theme={theme}>
      <Store.Provider value={{ store, setStore }}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Store.Provider>
    </ThemeProvider>
  );
};

export default App;
