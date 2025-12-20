import { createBrowserRouter, type RouteObject } from "react-router";

import App from "@/App";
import { MainLayout } from "@/layouts";
import {
  AllArticlePage,
  AllPortfolioPage,
  DetailArticlePage,
  HomePage,
  NotFoundPage,
} from "@/pages";

export const routes: RouteObject[] = [
  {
    Component: App,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            path: "/",
            Component: HomePage,
          },
          {
            path: "/portofolio",
            Component: AllPortfolioPage,
          },
          {
            path: "/artikel",
            Component: AllArticlePage,
          },
          {
            path: "/artikel/:slug",
            Component: DetailArticlePage,
          },
        ],
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
