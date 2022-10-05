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

export function getStaticPaths() {
  return {
    paths: [1, 2, 3].map((id) => ({ params: { id: String(id) } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export function getStaticProps() {
  return {
    props: {},
  };
}

export default Index;
