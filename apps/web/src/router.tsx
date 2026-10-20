import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { App } from "@/App";

const rootRoute = createRootRoute({ component: Outlet });
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: App });
const editorRoute = createRoute({ getParentRoute: () => rootRoute, path: "/f/$id" }).lazy(() =>
  import("./routes/editor.lazy").then((m) => m.Route),
);

export const router = createRouter({ routeTree: rootRoute.addChildren([homeRoute, editorRoute]) });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
