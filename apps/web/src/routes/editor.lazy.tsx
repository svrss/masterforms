import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/f/$id")({
  component: () => <p>todo: editor will go here</p>,
});
