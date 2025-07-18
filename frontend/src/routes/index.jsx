import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/components/shared/ErrorPage";

const Home = lazy(() => import("@/pages/Home/Home"));
const NotFound = lazy(() => import("@/pages/404/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "*", element: <NotFound /> },
      { index: true, element: <Home /> },
      // { path: "clients", element: <Clients /> },
    ],
  },
]);
