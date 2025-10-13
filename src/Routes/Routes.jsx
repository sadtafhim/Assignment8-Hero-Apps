import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppBlock from "../components/AppBlock/AppBlock";
import AppData from "../pages/AppData/AppData";
import Installation from "../pages/Installation/Installation";
import AppErrorPage from "../pages/AppErrorPage/AppErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/Apps",
        Component: Apps,
      },
      {
        path: "AppData/:appId",
        loader: () => fetch("/appData.json"),
        errorElement: <AppErrorPage></AppErrorPage>,
        Component: AppData,
      },
      {
        path: "/Installation",
        loader: () => fetch("/appData.json"),
        Component: Installation,
      },
    ],
  },
]);

export default router;
