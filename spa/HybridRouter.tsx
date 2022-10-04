import { BrowserRouter, StaticRouter } from "react-router-dom";

export function HybridRouter({
  children,
  serverLocation,
}: {
  children: React.ReactNode;
  serverLocation?: string;
}) {
  if (serverLocation) {
    return <StaticRouter location={serverLocation}>{children}</StaticRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
}
