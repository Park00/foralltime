import { lazy } from "react";

const PagesRoutes = [
  {
    path: "/pages/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-page",
    component: lazy(() => import("../../view/pages/error")),
    layout: "FullLayout",
  },
  {
    path: "/pages/knowledge-base/knowledge-base-1",
    component: lazy(() =>
      import("../../view/pages/knowledge-base/knowledge-base-1")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/knowledge-base/knowledge-base-2",
    component: lazy(() =>
      import("../../view/pages/knowledge-base/knowledge-base-2")
    ),
    layout: "VerticalLayout",
  },
];

export default PagesRoutes;
