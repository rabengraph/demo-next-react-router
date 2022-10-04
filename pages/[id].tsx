import type { NextPage } from "next";
import { useRouter } from "next/router";
import { App } from "../spa/App";
import { useIsOnServer } from "../spa/useIsOnServer";

const Index: NextPage = () => {
  const isOnServer = useIsOnServer();
  const router = useRouter();
  const id = router.query.id;

  return <App serverLocation={isOnServer ? `/${id}` : undefined} />;
};

export default Index;
