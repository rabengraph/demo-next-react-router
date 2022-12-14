import type { NextPage } from "next";
import { App } from "../spa/App";
import { useIsOnServer } from "../spa/useIsOnServer";

const Index: NextPage = () => {
  const isOnServer = useIsOnServer();

  return <App serverLocation={isOnServer ? "/" : undefined} />;
};

export default Index;
