import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "@/components/root/Root";

const Library = lazy(() => import("../pages/library/Library"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const Playlist = lazy(() => import("../pages/playlist/Playlist"));
const Updates = lazy(() => import("../pages/updates/Updates"));

// const Home = lazy(() => import("../pages/Home"));
// const Blog = lazy(() => import("../pages/Blog"));
// const Dev = lazy(() => import("../pages/Dev"));
// const PageNotFound = lazy(() => import("../components/pageNotFound/PageNotFound"));

// const Blog = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../pages/Blog")), 3000);
//   });
// });

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Library />,
        path: "library",
      },
      {
        element: <Settings />,
        path: "settings",
      },
      {
        element: <Playlist />,
        path: "playlist/:id",
      },
      {
        element: <Updates />,
        path: "updates",
      },
      { path: "*", element: <></> },
    ],
  },
]);
