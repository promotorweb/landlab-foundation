import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      window.location.replace("/index.html");
    }
    throw redirect({ href: "/index.html" });
  },
  component: () => null,
});
