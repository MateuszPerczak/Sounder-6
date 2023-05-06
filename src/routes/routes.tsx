import { lazy } from "react";
import { createHashRouter } from "react-router-dom";

import App from "@/components/app/App";

// const Settings = lazy(() => import("../pages/settings/Settings"));

const Settings = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../pages/settings/Settings")), 3000);
  });
});

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "settings", element: <Settings /> },
      { path: "*", element: <></> },
    ],
  },
]);
