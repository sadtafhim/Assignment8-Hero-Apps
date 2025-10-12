import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("appData.json"),
      },
      {
        path: "/Apps",
        Component: Apps,
        loader: () => fetch("appData.json"),
      },
    ],
  },
]);

export default router;
